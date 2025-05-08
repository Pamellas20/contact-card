import React from 'react';
import { Mail, Phone, User } from 'lucide-react';


interface ContactCardProps {
  name: string;
  email: string;
  phone?: string;
}

function ContactCard({ name, email, phone }: ContactCardProps) {
  return (
    <div className="w-full max-w-sm mx-auto bg-amber-50 rounded-lg shadow-md overflow-hidden border border-amber-200 hover:shadow-lg transition-shadow">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-center mb-3">
          <div className="bg-amber-100 rounded-full p-2 sm:p-3 border border-amber-300">
            <User className="text-amber-900" size={20} />
          </div>
        </div>
        
        <h2 className="text-lg sm:text-xl font-bold text-center text-amber-900 mb-3">{name}</h2>
        
        <div className="space-y-2">
          <div className="flex items-center">
            <Mail className="text-amber-700 mr-2" size={16} />
            <span className="text-amber-900 text-sm sm:text-base break-all">{email}</span>
          </div>
          
          {phone && (
            <div className="flex items-center">
              <Phone className="text-amber-700 mr-2" size={16} />
              <span className="text-amber-900 text-sm sm:text-base">{phone}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ContactCards() {
  return (
    <div className="bg-amber-100 min-h-screen p-4 sm:p-8">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-amber-900 mb-6">
        Contact Card
      </h1>
      
      <div className="w-full max-w-md mx-auto">
        <ContactCard 
          name="UWASE Pamella" 
          email="uwasepamellas@gmail.com" 
          phone="+250781200661" 
        />
      </div>
    </div>
  );
}