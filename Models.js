
class  User {
  constructor(fname,lname,password,email,username) {
    this.fname = fname;
    this.lname = lname;
    this.password = password;
    this.email = email;
    this.username = username;
  }
}
class HotelBooking {
  constructor(name,room,checkindate,checkoutdate,userId) {
    this.name = name;
    this.room = room;
   
     this.checkIn = checkindate;
     this.checkOut = checkoutdate;
     this.userID = userId;
  }
}