'use client';

import Link from 'next/link'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contacts', href: '/contacts' },
]

export default function profiles() {
 
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="bg-gray-900 min-h-screen min-w-full"></div>
    );
}