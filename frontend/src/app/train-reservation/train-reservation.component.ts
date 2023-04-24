import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-train-reservation',
  templateUrl: './train-reservation.component.html',
  styleUrls: ['./train-reservation.component.css']
})

export class TrainReservationComponent {
  seatnumbers: number[][];
  availableseats : any;
  totalavilableseats=0;

  constructor(private http: HttpClient) { 
  const range = Array.from({ length: 80 }, (_, i) => i + 1);
    this.seatnumbers = this.chunkArray(range, 7);
  }
  
  private chunkArray(arr: any[], chunkSize: number): any[][] {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  }

  ngOnInit() {
    this.http.get('https://backend-reservation-system-tloy.vercel.app/api/seats/get').subscribe(data => {
      this.availableseats=data
      for(let i=0;i<80;i++){
        if(this.availableseats[i]===1) this.totalavilableseats++;
      }
    });
  }
  
  seats = {
    name: '',
    seats: 0
  };

  reserveSeats(numSeats: number){

    //create a layout with the arrangement of seats just like 2D array
    let reservedSeats = [];
    const layout = this.chunkArray(this.availableseats, 7);
    let n=layout.length

    //two cases
    //case 1 in case seats available in single row
    //case 2 not available in single row
    //case 3 not enough seats to book

    //case:1
    // Loop through the rows of the seat layout
    for (let i = 0; i < n; i++) {
      let row = layout[i];
      let numavailableSeats=0
      for(let k = 0; k < 7; k++){
        if(row[k] === 1) numavailableSeats++;
      }
      if (numavailableSeats >= numSeats) {
        for (let j = 0; j < row.length && numSeats > 0; j++) {
          if (row[j] === 1) {
            reservedSeats.push((i*7)+j+1);
            numSeats--;
            row[j] = 0;
          }
        }
        if (numSeats === 0) {
          return reservedSeats;
        }
      }
    }

    //case:2
    // If there are not enough availableseats seats in one row, reserve nearby seats
    for (let i = 0; i < layout.length; i++) {
      let row = layout[i];
      for (let j = 0; j < row.length && numSeats > 0; j++) {
        if (row[j] === 1) {
          reservedSeats.push((i*7)+j+1);
          row[j] = 0;
          numSeats--;
        }
      }
      if (numSeats === 0) {
        return reservedSeats;
      }
    }

    //case:3
    // If there are no availableseats seats left, return an empty array
    return reservedSeats
  } 

  onSubmit() {
    this.seats.seats= this.seats.seats>7?7:this.seats.seats
    const allocatedSeats=this.reserveSeats(this.seats.seats)
    this.http.post('https://backend-reservation-system-tloy.vercel.app/api/seats/create', {"name":this.seats.name,"seats":this.seats.seats,"seatNumbers":allocatedSeats}).subscribe(response => {
    alert(`Booked Seats : ${allocatedSeats}`)
    window.location.reload();
    });
  }
}
