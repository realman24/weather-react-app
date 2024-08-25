const dateNow = () => {
  const myUnixTimestamp = 1714498319; // start with a Unix timestamp

  const myDate = new Date(myUnixTimestamp * 1000); // convert timestamp to milliseconds and construct Date object

  console.log(myDate); // will print "Thu Aug 10 2023 01:13:20" followed by the local timezone on browser console

  ////////////////////////
  console.log(myDate.toISOString()); // will print "2023-08-10T01:13:20.000Z"
  console.log(myDate.toLocaleString()); // output will vary based on system locale settings

  //   const theDate = myDate.toISOString();
  const theTime = myDate.toLocaleString();
  ////////////////////////
  console.log(myDate.toDateString()); // will print "Thu Aug 10 2023"
  console.log(myDate.toTimeString()); // will print "01:13:20" followed by the local timezone
  //   const theDate = myDate.toDateString();
  //   const theTime = myDate.toTimeString();

  ////////////////////////
  console.log(myDate.getFullYear()); // will print 2023
  console.log(myDate.getMonth()); // will print 7 (August; January would be 0)
  console.log(myDate.getDate()); // will print 10
  console.log(myDate.getHours()); // will print 1
  console.log(myDate.getMinutes()); // will print 13
  console.log(myDate.getSeconds()); // will print 20

  const theYear = myDate.getFullYear();
  const theMonth = myDate.getMonth();
  const theDate = myDate.getDate();
  const theHours = myDate.getHours();
  const theMinutes = myDate.getMinutes();
  const theSeconds = myDate.getSeconds();
};
