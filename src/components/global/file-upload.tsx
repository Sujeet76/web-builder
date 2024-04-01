import { FileIcon, X } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { UploadDropzone } from "@/lib/uploadThing";

interface Props {
  apiEndpoint: "agencyLogo" | "avatar" | "subaccountLogo";
  onChange: (url?: string) => void;
  value?: string;
}

const FileUpload: React.FC<Props> = ({ apiEndpoint, onChange, value }) => {
  const type = value?.split(".").pop();

  if (value) {
    return (
      <div className='flex flex-col justify-center items-center aspect-square'>
        {type !== "pdf" ? (
          <div className='relative size-40 overflow-hidden'>
            <Image
              src={value}
              layout='fill'
              objectFit='cover'
              alt='image'
            />
          </div>
        ) : (
          <div className='relative flex items-center p-2 mt-2 rounded-md bg-background/10'>
            <FileIcon />
            <a
              href={value}
              target='_blank'
              rel='noopener_noreferrer'
            >
              View PDF
            </a>
          </div>
        )}
        <Button
          variant={"ghost"}
          type='button'
          onChange={() => onChange("")}
        >
          <X className='size-4' />
          Remove Logo
        </Button>
      </div>
    );
  }

  return (
    <div className='w-full bg-muted/30'>
      <UploadDropzone
        endpoint={apiEndpoint}
        onClientUploadComplete={(res) => {
          onChange(res?.[0].url);
        }}
        onUploadError={(err) => {
          console.error(err);
        }}
      />
    </div>
  );
};

export default FileUpload;
