import multer from "multer";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const date = Date.now();
        const filename = `${date}_${file.originalname}`
        cb(null, filename)
    }
})

const fileFilter = (req, file, cb) => {
    const condition
        = file.mimetype === "image/png"
        || file.mimetype === "image/jpg"
        || file.mimetype === "image/jpeg"

    if(condition){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

export default multer({storage, fileFilter})