/* 
 * Simple editor component that takes placeholder text as a prop 
 */
import ReactQuill from 'react-quill'
import React,{useState} from 'react'
import 'react-quill/dist/quill.snow.css';
import './Editor.css'
import { useAuth } from '../auth';
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";

 let modules = {
  toolbar: [
    [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
    [{size: []}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, 
     {'indent': '-1'}, {'indent': '+1'}],
   // ['link', 'image', 'video'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  }
}
/* 
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
let formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent'
]
export default function Editor () {
      const {userData} = useAuth()
      const [theme,setTheme] = useState("snow")
      const [editorHtml,setEditorHtml] = useState("")
      const navigate = useNavigate();

    
      const handleSubmit = async  (e) =>{
        e.preventDefault()
    try{
    const response = await axios.post(`http://localhost:5000/addBlog`,{
    data:editorHtml,
    user:userData,
    likes:0,
    ldata:[]
    });
    console.log(response.data)
    if(response.data.success)
    {
    navigate("/Profile")
      console.log("successfully logged In")
    }
    }
    catch(error) {
    console.log("this is error",error)
    }
    }

    const handleChange =(html) => {
        setEditorHtml(html)
    }
    
   const  handleThemeChange =(newTheme) =>{
      if (newTheme === "core") newTheme = null;
      setTheme(newTheme)
    }
    
   
      return (
        <div className="editor-container">
          <ReactQuill 
            theme={theme}
            onChange={handleChange}
            value={editorHtml}
            modules={modules}
            formats={formats}
            bounds={'.app'}
            placeholder={"Write your experience here"}           />
          <button
          onClick={(e) =>{
            handleSubmit(e)
          }}
          >
            Save
          </button>
         </div>
       )
    
  }
  
  /* 
   * Quill modules to attach to editor
   * See https://quilljs.com/docs/modules/ for complete options
   */
 
  

