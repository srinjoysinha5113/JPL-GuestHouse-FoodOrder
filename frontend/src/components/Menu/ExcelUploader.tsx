import React, { useRef } from 'react';

interface ExcelUploaderProps {
  onUpload: (file: File) => void;
  title?: string;
}

const ExcelUploader: React.FC<ExcelUploaderProps> = ({ onUpload, title = "Upload Menu (Excel)" }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <input 
        type="file" 
        className="hidden" 
        accept=".xlsx, .xls" 
        ref={fileInputRef}
        onChange={handleFileChange}
      />
      <button 
        onClick={() => fileInputRef.current?.click()}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
      >
        Select File
      </button>
      <p className="mt-2 text-sm text-gray-500">Supports .xlsx and .xls files</p>
    </div>
  );
};

export default ExcelUploader;
