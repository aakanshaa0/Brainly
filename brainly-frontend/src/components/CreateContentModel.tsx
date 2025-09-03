import { CrossIcon } from "../icons/Crossicon";
import { useRef, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import React from "react";

enum ContentType {
    Twitter = "twitter",
    Youtube = "youtube",
}

interface CreateContentModelProps {
    open: boolean;
    onClose: () => void;
}

export function CreateContentModel({ open, onClose }: CreateContentModelProps) {
    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type, setType] = useState<ContentType>(ContentType.Twitter);

    async function addContent() {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
    
        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`, 
                {
                    title,
                    link,
                    type,
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                }
            );
            onClose();
            console.log("Content added successfully!");
        } catch (error) {
            console.error("Error adding content:", error);
        }
    }

    return (
        <div>
            {open && 
                <div>
                    <div className="w-screen h-screen bg-slate-500 bg-opacity-60 fixed top-0 left-0
                    opacity-60 flex justify-center">
                    
                    </div>
                     <div className="w-screen h-screen fixed top-0 left-0 flex justify-center">
                        <div className="flex flex-col justify-center">
                            <span className="bg-white p-4 rounded">
                                <div className="flex justify-end">
                                    <div onClick={onClose} className="cursor-pointer">
                                        <CrossIcon />
                                    </div>
                                </div>
                                <div>
                                    <Input ref={titleRef} placeholder="Title" />
                                    <Input ref={linkRef} placeholder="Link" />
                                </div>
                                <div>
                                    <select value={type} onChange={(e) => setType(e.target.value as ContentType)}>
                                        <option value={ContentType.Twitter}>Twitter</option>
                                        <option value={ContentType.Youtube}>YouTube</option>
                                    </select>
                                </div>
                                <div className="flex justify-center">
                                    <Button onClick={addContent} variant="primary" text="Submit" />
                                </div>
                            </span>
                        </div>
                     </div>
                </div>
            }
        </div>
    );
}

interface InputProps {
    placeholder: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ placeholder }, ref) => (
    <div>
        <input ref={ref} placeholder={placeholder} type="text" className="px-4 py-2 border rounded m-2" />
    </div>
));

export default Input;
