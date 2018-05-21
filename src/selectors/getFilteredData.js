export default (list, { text, sortBy }) => {
  
  const arr = list.filter((item, index) => {
    return item.description.toLowerCase().includes(text.toLowerCase());
  });

  if(sortBy === "highest") {
    return arr.sort(({amount: cur}, {amount: next})=>cur > next ? -1 : 1);
  } 
  else if (sortBy === "lowest") {
    return arr.sort(({amount: cur}, {amount: next})=>cur > next ? 1 : -1);
  }
  return arr;
}