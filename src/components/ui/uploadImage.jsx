import { useState } from "react";
import classNames from "classnames";

const UploadImage = ({ name, multi = false, rootClassName = '', onChange, label }) => {
    const [files, setFiles] = useState([]);
    const [isDragging, setIsDragging] = useState(false);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(multi ? [...files, ...selectedFiles] : selectedFiles);

        if (onChange) {
            onChange(multi ? [...files, ...selectedFiles] : selectedFiles);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const droppedFiles = Array.from(event.dataTransfer.files);
        setFiles(multi ? [...files, ...droppedFiles] : droppedFiles);

        if (onChange) {
            onChange(multi ? [...files, ...droppedFiles] : droppedFiles);
        }
    };

    const removeFile = (index) => {
        const updatedFiles = files.filter((_, i) => i !== index);
        setFiles(updatedFiles);

        if (onChange) {
            onChange(updatedFiles);
        }
    };

    return (
        <label className={classNames(rootClassName)}>
            <p className="text-gray-700 font-medium mb-2">{label}</p>

            <div
                className={`border-2 border-dashed rounded-lg p-4 transition-colors 
          ${isDragging ? 'border-blue-500 bg-blue-100' : 'border-gray-300'}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <input
                    type="file"
                    name={name}
                    multiple={multi}
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                    <div className="text-center">
                        <p className="text-gray-600">Click or Drag files to Upload!</p>

                    </div>
                </label>
            </div>

            <div className="uploaded-files mt-4">
                {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-2 border-b">
                        <span>{file.name}</span>
                        <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
        </label>
    );
};

export default UploadImage;
