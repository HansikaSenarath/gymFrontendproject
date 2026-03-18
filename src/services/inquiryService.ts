import { post } from "./apiClient";

export interface InquiryPayload {
    name: string;
    email: string;
    message: string;
}

export async function submitInquiry(data: InquiryPayload): Promise<void> {
    await post("/api/contacts", data);
}
