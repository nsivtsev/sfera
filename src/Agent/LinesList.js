import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'


export default function LinesList({line}) {
    const validateFile = (file) => {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
        if (validTypes.indexOf(file.type) === -1) {
            return false;
        }
        return true;
    }

    const fileSize = (size) => {
        if (size === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
        const i = Math.floor(Math.log(size) / Math.log(k));
        return parseFloat((size / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    }

    const fileType = (fileName) => {
        return fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length) || fileName;
    }

    const handleFiles = (files) => {
        for(let i = 0; i < files.length; i++) {
            if (validateFile(files[i])) {
                // add to an array so we can display the name of file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
            } else {
                // add a new property called invalid
                files[i]['invalid'] = true;
                // add to the same array so we can display the name of the file
                setSelectedFiles(prevArray => [...prevArray, files[i]]);
                // set error message
                setErrorMessage('File type not permitted');
            }
        }
    }

    const removeFile = (name) => {
        // find the index of the item
        // remove the item from array
        const validFileIndex = validFiles.findIndex(e => e.name === name);
        validFiles.splice(validFileIndex, 1);
        // update validFiles array
        setValidFiles([...validFiles]);
        const selectedFileIndex = selectedFiles.findIndex(e => e.name === name);
        selectedFiles.splice(selectedFileIndex, 1);
        // update selectedFiles array
        setSelectedFiles([...selectedFiles]);
    }

    const dragOver = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        e.preventDefault();
    }

    const dragLeave = (e) => {
        e.preventDefault();
    }

    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        if (files.length) {
            handleFiles(files);
        }
    }

    const [selectedFiles, setSelectedFiles] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [validFiles, setValidFiles] = useState([]);

    useEffect(() => {
        let filteredArray = selectedFiles.reduce((file, current) => {
            const x = file.find(item => item.name === current.name);
            if (!x) {
                return file.concat([current]);
            } else {
                return file;
            }
        }, []);
        setValidFiles([...filteredArray]);

    }, [selectedFiles]);

    return (
        <div className="px-6 py-4 border-t border-gray-200">
            {line.name}
            <div className="flex">
                <div className="w-1/3 bg-white p-10 rounded-lg shadow-lg">
                    <h1 className="text-xl font-bold">Фото</h1>

                    <div className="file-display-container">
                        {
                            validFiles.map((data, i) =>
                                <div className="file-status-bar" key={i}>
                                    <div>
                                        <div className="file-type-logo"></div>
                                        <div className="file-type">{fileType(data.name)}</div>
                                        <span className={`file-name ${data.invalid ? 'file-error' : ''}`}>{data.name}</span>
                                        <span className="file-size">({fileSize(data.size)})</span> {data.invalid && <span className='file-error-message'>({errorMessage})</span>}
                                    </div>
                                    <div className="file-remove" onClick={() => removeFile(data.name)}>X</div>
                                </div>
                            )
                        }
                    </div>

                    <div className="border-dashed border-2 w-64 h-32 rounded flex justify-center items-center p-2 text-center"
                         onDragOver={dragOver}
                         onDragEnter={dragEnter}
                         onDragLeave={dragLeave}
                         onDrop={fileDrop}
                    >
                        <div className="block text-gray-500">
                            <p>
                                <FontAwesomeIcon icon={faUpload} />
                            </p>
                            <p>
                                Выберите или перетащите сюда файлы
                            </p>
                        </div>
                    </div>

                    <button className="bg-blue-400 py-3 px-8 mt-4 rounded text-sm font-semibold hover:bg-opacity-75 text-white">
                        Очистить
                    </button>
                </div>
            </div>

        </div>
    );
}
