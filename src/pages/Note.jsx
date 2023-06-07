/* eslint-disable no-multi-str */
import { ToastContainer } from "react-toastify";
import { Editor } from '@tinymce/tinymce-react';

const Note = () => {
  return (
    <div className="container mx-auto my-20">
      <ToastContainer />
      <div>
        <Editor
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [

              "codesample",
            ],
            toolbar:
              "undo redo | formatselect | bold italic | \
              alignleft aligncenter alignright | \
              bullist numlist outdent indent  | codesample",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
    </div>
  );
};

export default Note;
