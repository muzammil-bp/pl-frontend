import React from "react";
import { Edit } from "lucide-react"; // Import the Edit icon
import { FilePenLine } from "lucide-react";
interface OrderSummaryProps {
  name: string;
  email: string;
  phone: string;
  po: string;
  paymentTerms: string;
  deliveryMethod: string;
  onEdit?: () => void; // for now just take it as optional arrgument to further add functionality in future
}

export function OrderSummary({
  name,
  email,
  phone,
  po,
  paymentTerms,
  deliveryMethod,
  onEdit,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg p-6 border-2 border-gray-300 w-auto max-w-120  relative">
      {/* Edit Icon */}
      <div className="w-auto mb-2">
        <button
          onClick={onEdit}
          className="absolute top-7 right-6 text-gray-500 hover:text-gray-800 transition-colors"
        >
          <Edit />
        </button>

        {/* Title */}
        <span className="text-xl mb-12 font-medium mb-4">Order Summary</span>
      </div>
      {/* Grid Container for Labels and Values */}
      <div className="space-y-0 tracking-tighter w-105">
        {/* Name */}
        <div className="flex items-center">
          <span className="w-55 text-16 tracking-tighter font-medium text-gray-500">
            Name
          </span>
          <span className="w-auto text-md font-normal text-gray-400">
            : {name}
          </span>
        </div>

        {/* Email */}
        <div className="flex items-center">
          <span className="w-55 text-md font-medium text-gray-500">Email</span>
          <span className="w-auto text-mdfont-normal text-gray-400 ">
            : {email}
          </span>
        </div>

        {/* Phone */}
        <div className="flex items-center">
          <span className="w-55 text-md font-medium text-gray-500">Phone</span>
          <span className="text-md w-auto font-normal text-gray-400">
            : {phone}
          </span>
        </div>

        {/* PO */}
        <div className="flex items-center">
          <span className="w-55 text-md font-medium text-gray-500">PO</span>
          <span className="text-md w-auto font-normal text-gray-400">
            : {po}
          </span>
        </div>

        {/* Payment Terms */}
        <div className="flex items-center">
          <span className="w-55 text-md font-medium text-gray-500">
            Payment Terms
          </span>
          <span className="text-md font-normal w-auto text-gray-400">
            : {paymentTerms}
          </span>
        </div>

        {/* Delivery Method */}
        <div className="flex items-center">
          <span className="w-55 text-md font-medium text-gray-500">
            Delivery Method
          </span>
          <span className="text-md font w-auto text-gray-400">
            : {deliveryMethod}
          </span>
        </div>
      </div>
    </div>
  );
}
