'use client'

import { useState } from 'react'
import { Phone, MessageCircle, Mail, X } from 'lucide-react'

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      color: 'bg-green-500 hover:bg-green-600',
      action: () => window.open('https://wa.me/919876543210', '_blank'),
    },
    {
      name: 'Phone',
      icon: Phone,
      color: 'bg-blue-500 hover:bg-blue-600',
      action: () => window.location.href = 'tel:+919876543210',
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-orange-500 hover:bg-orange-600',
      action: () => window.location.href = 'mailto:info@swiftlogistics.com',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Contact Options */}
      {isOpen && (
        <div className="flex flex-col gap-3 mb-2 animate-in slide-in-from-bottom-2">
          {contactMethods.map((method) => {
            const Icon = method.icon
            return (
              <button
                key={method.name}
                onClick={method.action}
                className={`${method.color} text-white p-3 rounded-full shadow-lg transition-all flex items-center gap-2 group`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden group-hover:inline text-sm font-semibold mr-2">
                  {method.name}
                </span>
              </button>
            )
          })}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-primary hover:bg-primary/90'
        } text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="text-xs bg-foreground text-background px-3 py-1 rounded-full whitespace-nowrap font-semibold shadow-lg animate-pulse">
          Contact us now
        </div>
      )}
    </div>
  )
}
