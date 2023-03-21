/**
 * 
  const cars = [
{'make': 'audi','model': 'r8','year': '2012'}, 
{'make': 'audi','model': 'rs5','year': '2013'},
{'make': 'ford','model': 'mustang','year': '2012'},
{'make': 'ford','model': 'fusion','year': '2015'}, 
'make': 'kia','model': 'optima','year': '2012'},];
Result/Output-
const cars = {
'audi': [{'model': 'r8','year': '2012'}, {'model': 'rs5','year': '2013'},],
'ford': [{'model': 'mustang','year': '2012'}, {'model': 'fusion','year': '2015'}],
'kia': [{'model': 'optima','year': '2012'}]}
 * **/
// Bad practice
function grpWiseAsMake(cars){
    let audi=[];
    let ford=[];
    let kia=[];
     const newObj = cars.forEach((id)=>{
  
         if(id.make=="audi"){
             audi.push(id)
         }
         else if(id.make=="ford"){
             ford.push(id)
         }
         else if(id.make=="kia"){
             kia.push(id)
         }
     }) 
     
     const resObj={
         audi:audi,
         ford:ford,
         kia:kia
     }
     return resObj
    console.log(resObj)
  }
  const cars = [{'make': 'audi','model': 'r8','year': '2012'}, 
  {'make': 'audi','model': 'rs5','year': '2013'}, 
  {'make': 'ford','model': 'mustang','year': '2012'}, 
  {'make': 'ford','model': 'fusion','year': '2015'}, 
  {'make': 'kia','model': 'optima','year': '2012'},];
  // console.log(grpWiseAsMake(cars))
  
  const carsByMake = cars.reduce((accumulator, currentValue) => {
    const make = currentValue.make;
    if (!accumulator[make]) {
      accumulator[make] = [];
    }
    accumulator[make].push({
      model: currentValue.model,
      year: currentValue.year
    });
    return accumulator;
  }, {});
  
  console.log(carsByMake);
