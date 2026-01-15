import { useState, useRef, DragEvent } from 'react';
import { X, Maximize2, Upload, Paperclip, Trash2, Download } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/button';

interface AttachmentFile {
  id: string;
  name: string;
  size: number;
  date: string;
  progress?: number;
}

interface AttachmentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (files: AttachmentFile[]) => void;
  initialFiles?: AttachmentFile[];
}

export const AttachmentsModal = ({
  isOpen,
  onClose,
  onSave,
  initialFiles = [],
}: AttachmentsModalProps): JSX.Element | null => {
  const { dir } = useLanguage();
  const [files, setFiles] = useState<AttachmentFile[]>(initialFiles);
  const [uploadingFile, setUploadingFile] = useState<AttachmentFile | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} بايت`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} كيلو بيت`;
    return `${(bytes / (1024 * 1024)).toFixed(0)} ميجا`;
  };

  const formatDate = (date: string): string => {
    const d = new Date(date);
    return d.toLocaleDateString('ar', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;

    Array.from(fileList).forEach((file) => {
      const newFile: AttachmentFile = {
        id: Math.random().toString(36).substr(2, 9),
        name: file.name,
        size: file.size,
        date: new Date().toISOString(),
        progress: 0,
      };

      setUploadingFile(newFile);

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          setFiles((prev) => [...prev, { ...newFile, progress: undefined }]);
          setUploadingFile(null);
        } else {
          setUploadingFile((prev) => (prev ? { ...prev, progress } : null));
        }
      }, 200);
    });
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFiles(e.target.files);
  };

  const handleDeleteFile = (id: string) => {
    setFiles((prev) => prev.filter((file) => file.id !== id));
  };

  const handleSave = () => {
    onSave(files);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-[#0000004c] z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[601px] h-[700px] bg-white rounded-xl z-50 flex flex-col">
        {/* Header */}
        <div className={`h-[61px] bg-slate-100 rounded-t-xl flex items-center justify-between px-5 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <h2 className="text-xl font-medium text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
            أضف مرفقات
          </h2>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="w-[42px] h-[42px] bg-white rounded-lg border border-[#cfcfcf] flex items-center justify-center hover:bg-gray-50"
            >
              <X className="w-5 h-5" />
            </button>
            <button className="w-[42px] h-[42px] bg-white rounded-lg border border-[#cfcfcf] flex items-center justify-center hover:bg-gray-50">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-5 py-6">
          {/* Drag and Drop Area */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`w-full h-24 bg-[#bdc4cf0a] border-2 border-dashed rounded-xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-colors ${
              isDragging ? 'border-[#093738] bg-[#0937380a]' : 'border-[#bdc4cfc9]'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-[22px] h-[22px]" />
            <p className="text-base text-center [font-family:'IBM_Plex_Sans_Arabic',Helvetica]" dir={dir}>
              سحب وإفلات أو{' '}
              <span className="text-[#092e32] font-semibold">إختر ملف</span> للتحميل
            </p>
          </div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileInputChange}
            className="hidden"
          />

          {/* Uploading File Progress */}
          {uploadingFile && (
            <div className="mt-4 p-4 bg-slate-50 rounded-xl">
              <div className={`flex items-center gap-3 mb-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                <div className="w-[51px] h-[48px] bg-[#bdc4cf21] rounded-[7px] flex items-center justify-center">
                  <Paperclip className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className={`flex items-center justify-between ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                    <p className="text-sm font-semibold text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {uploadingFile.name}
                    </p>
                    <span className="text-sm text-[#00000080] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {uploadingFile.progress}%
                    </span>
                  </div>
                  <p className="text-sm text-[#00000080] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                    {formatFileSize(uploadingFile.size * (uploadingFile.progress! / 100))} من{' '}
                    {formatFileSize(uploadingFile.size)}
                  </p>
                </div>
              </div>
              <div className="w-full h-[11px] bg-[#dde2e9] rounded-xl overflow-hidden">
                <div
                  className="h-full bg-[#2cc28d] rounded-xl transition-all duration-300"
                  style={{ width: `${uploadingFile.progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Separator Line */}
          {files.length > 0 && <div className="my-4 h-px bg-gray-200" />}

          {/* Files List */}
          <div className="space-y-3">
            {files.map((file) => (
              <div
                key={file.id}
                className="p-4 bg-slate-50 rounded-xl flex items-center gap-3"
              >
                {/* File Info */}
                <div className={`flex-1 flex items-center gap-3 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-[51px] h-[48px] bg-[#bdc4cf21] rounded-[7px] flex items-center justify-center">
                    <Paperclip className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-base font-semibold text-black [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                      {file.name}
                    </p>
                    <div className={`flex items-center justify-between ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      <span className="text-sm text-[#9ea5b0] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {formatFileSize(file.size)}
                      </span>
                      <span className="text-sm text-[#9ea5b0] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]">
                        {formatDate(file.date)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <button className="w-[52px] h-[50px] bg-[#bdc4cf21] rounded-lg flex items-center justify-center hover:bg-[#bdc4cf31] transition-colors">
                  <Download className="w-6 h-6" />
                </button>

                {/* Delete Button */}
                <button
                  onClick={() => handleDeleteFile(file.id)}
                  className="w-[52px] h-[50px] bg-[#e83d401a] rounded-lg flex items-center justify-center hover:bg-[#e83d402a] transition-colors"
                >
                  <Trash2 className="w-[27px] h-[26px] text-red-600" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className={`h-[74px] border-t border-gray-200 flex items-center px-5 gap-3 ${dir === 'rtl' ? 'justify-end' : 'justify-start'}`}>
          <Button
            onClick={handleSave}
            className="w-[100px] h-[43px] bg-[#093738] hover:opacity-90 text-white rounded-lg shadow-[0px_4px_4px_#0000001a] [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          >
            حفظ
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-[100px] h-[43px] bg-[#e6ebeb] hover:bg-[#d6dbdb] text-[#092e32] rounded-lg [font-family:'IBM_Plex_Sans_Arabic',Helvetica]"
          >
            إغلاق
          </Button>
        </div>
      </div>
    </>
  );
};
