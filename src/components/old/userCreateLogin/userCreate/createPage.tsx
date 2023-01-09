import React from 'react'
 function UserCreatePage(){
 const [formData,setFormData] = React.useState({
    name:"",
    email:"",
    password: "",
})
    
function handleChange(event:any) {
    console.log(formData)

    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}




return(
    <div className="flex-col w-full ">
      <form className="text-slate-900 grid gap-4 grid-rows items-center justify-center ">

        <div className="">
      <label className="block text-gray-900 text-sm font-bold mb-2" >
        Name
      </label>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="name"
                className="w-full"
            />
            </div>
            
            <div>
        <label className="block text-gray-900 text-sm font-bold mb-2" >
        Email
      </label>
            <input
                type="text"
                placeholder="email"
                onChange={handleChange}
                name="email"
            />
            </div>

                <div>
                <label className="block text-gray-900 text-sm font-bold mb-2" >
                Password
                </label>
                <input
                type="text"
                placeholder="password"
                onChange={handleChange}
                name="password"
            />
                </div>
            
              <button
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
               type="submit">
                  Create User
                  </button>
      </form>
      </div>

)

}


export default UserCreatePage