const authAdmin = (req , res, next)=>{
    const token = "xyz"
    const isAdminAuthorized = token == "xyz"
    if(!isAdminAuthorized){
        return res.status(403).send("Access denied")
    }else{
        next()
    }    
}

const authuser = (req , res , next)=>{
    const token = "abcdef"
    const isuserauthorized = token == "abcd"
    if(!isuserauthorized){
        return res.status(401).send("access denied")
    }else{
        next()
    }
}

module.exports = {authAdmin, authuser}