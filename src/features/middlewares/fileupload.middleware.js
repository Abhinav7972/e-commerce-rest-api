//import multer
import multer from "multer";

//configure storage with file name and location

const storage = multer.diskStorage({
    destination :(req,res,cb)=>{
        cb(null,'./uploads/')
    },
    filename : (req,file,cb) =>{
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const  upload = multer({storage:storage})

export {upload};
