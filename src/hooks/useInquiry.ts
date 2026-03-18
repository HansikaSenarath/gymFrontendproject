import { useState } from "react";
import { submitInquiry, type InquiryPayload } from "../services/inquiryService";

export function useInquiry() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit = async (data: InquiryPayload) => {
        setIsSubmitting(true);
        try {
            await submitInquiry(data);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { submit, isSubmitting };
}
