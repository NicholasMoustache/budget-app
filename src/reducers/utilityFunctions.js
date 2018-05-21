export const adding = (action,state) => {
  const { type } = action.payload;
   return {
     ...state,
     [type]: [{...action.payload}, ...state[type] ]
   }
 }
 
 export const removing = (action, state) => {
   const { id, type } = action.payload;
   return {
     ...state,
     [type]: state[type].filter(data=>data.id !== id)
   }
 }

 export const removingAll = (action, state) => {
   const { type } = action.payload;
   return {
     ...state,
     [type]: []
   }
 }
 
 export const startEditing = (action, state) =>{
   const { id, type } = action.payload;
   return {
     ...state,
     [type]: state[type].map(data=>{
       if(data.id===id) {
         return {...data, edit: !data.edit}
       } 
       return data;
     })
   }
 }


 export const editing = (action,state) => {
  const  { id, type }= action.payload;
  return {
    ...state,
    [type]: state[type].map(data=>{
      if(data.id === id) {
        return {
          ...data,
          ...action.payload
        }
      }
      return data;
    })
  }
 }

 export const canceling = (action, state) => {
   const { id, type } = action.payload;
   return {
     ...state,
     [type]: state[type].map(data=>{
      if(data.id === id ) {
        return {...data, edit: false}
      }
      return data;
     })
   }
 }


 export const filtering = (action, state ) => {
   const { text, type } = action.payload;

   return {
     ...state,
     [type]: {
       ...state[type],
       text
     }
   }
 }

 export const sorting = (action, state) => {
  const { type, sortBy } = action.payload;
  return {
    ...state,
    [type]: {
      ...state[type],
      sortBy
    }
  }
 }

 export const settingActiveOption = (action, state) => {
   const { activeOption } = action.payload;
   return {
     ...state,
     activeOption
   }
 }