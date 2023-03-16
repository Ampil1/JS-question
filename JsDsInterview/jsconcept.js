function a() {


  setImmediate(function A() {
    console.log("1st immediate");
  });

  setImmediate(function B() {
    console.log("2nd immediate");
  });

  setTimeout(() => {
    console.log("ttttttttttttt-111111");
  }, 0);

  setTimeout(() => {
    console.log("ttttttttttt2");
  });
  process.nextTick(function C() {
    console.log("1st process");
  });

  process.nextTick(function D() {
    console.log("2nd process");
  });
  console.log("program started");
}
a();
/**
 * O/P
program started
1st process
2nd process
ttttttttttttt-111111
ttttttttttt2
1st immediate
2nd immediate
 * 
 */
