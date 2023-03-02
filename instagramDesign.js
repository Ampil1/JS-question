//fallow reqlist --->person who's requested to fallow me
// myfallow list --> person who follwing me
// my fallowing list -> person who I falowing.

//myfallow
// instagram userSchema

//DBuser1-> 10k
//DBUser2-> 10K
 const user = new mongoose.Schema({
        userName: string,
        email: string,
        mobileNumber: string,
        profilePic:{
            imagetUrl:string,
            publicId: string,
            imageId: string
        },
        fallowerCount: Number,
        isPrivate: boolean,// true , false
        isAccepeted: boolean,
        //person who's follwing
        myfallloweList:[{
            userId:string,
            userName: string,
        },
        {
        userId:string,
        userName: string
        }
    
    ],
        // person who's requested to fallow
        fallowRequest:[
        {
            userId:string,
            userName: string,
        },
        {
        userId:string,
        userName: string,
        }],
        // flowing list 

        fallowinglist:[{
            userId:string,
            userName: string,
        }]


 })

