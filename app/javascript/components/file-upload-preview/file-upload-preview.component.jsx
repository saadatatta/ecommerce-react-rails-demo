import React,{useState} from "react"
import "./file-upload-preview.styles.scss"

const FileUploadPreview = ({file}) => {
    const [filePreview,setFilePreview] = useState(null)

    if (!file) return null

    let reader = new FileReader();
    reader.onloadend = () => {
        setFilePreview(reader.result)
    };
    reader.readAsDataURL(file);

    return (
        <div className="file-upload-preview">
            <img src={filePreview} className="file-upload-preview-img"/>
        </div>
    )
}

export default FileUploadPreview