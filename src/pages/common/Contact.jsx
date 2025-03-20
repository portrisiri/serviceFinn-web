import React from 'react'
import { Facebook} from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';

function Contact() {
  return (
    <>
<section id="contact" class="bg-white py-16 px-4">
  <h2 class="text-4xl font-semibold text-blue-700 text-center mb-4">Get in Touch with ServiceFinn</h2>
  <div class="max-w-4xl mx-auto text-center">
    <p class="text-xl text-blue-700 mb-10 center">
      We’d love to hear from you! 
    </p>
  </div>

  
  <div class="max-w-2xl mx-auto">
    <form class="space-y-6">
      <div>
        <label for="name" class="block text-lg text-blue-700">Your Name</label>
        <input type="text" id="name" class="w-full p-3 border border-blue-900 rounded-md " placeholder="Your Name" required />
      </div>
      <div>
        <label for="email" class="block text-lg  text-blue-700">Your Email</label>
        <input type="email" id="email" class="w-full p-3 border border-blue-900 rounded-md" placeholder="Your Email" required />
      </div>
      <div>
        <label for="message" class="block text-lg  text-blue-700">Your Message</label>
        <textarea id="message" class="w-full p-3 border border-blue-900 rounded-md" rows="6" placeholder="How can we assist you?" required></textarea>
      </div>
      <button type="submit" class="w-full bg-blue-700 text-white py-3 rounded-md hover:bg-blue-700 transition">Send Message</button>
    </form>
  </div>

  
  <div class="mt-12 max-w-4xl mx-auto text-center mb-15">
    <h3 class="text-3xl font-semibold text-blue-700 mb-6">Contact Information</h3>
    <div class="flex flex-col sm:flex-row justify-center items-start gap-10">
      
      <div class="flex flex-col items-center">
        <h4 class="text-xl font-medium text-blue-600 mb-4">Our Office</h4>
        <p class="text-md text-blue-900">
          12 soi sukhumvit 5<br />
          Sukhumvit road, Phatumwan<br />
          Bangkok, Thailand 10110
        </p>
      </div>
     
      <div class="flex flex-col items-center">
        <h4 class="text-xl font-medium text-blue-600 mb-4">Phone</h4>
        <p class="text-md text-blue-900">
          081-999-9999
        </p>
      </div>
     
      <div class="flex flex-col items-center">
        <h4 class="text-xl font-medium text-blue-600 mb-4">Email</h4>
        <p class="text-md text-blue-900">
          contact@servicefinn.com
        </p>
      </div>
    </div>
  </div>

 
  <div class="mt-12 max-w-4xl mx-auto text-center">
    <h4 class="text-2xl font-semibold text-blue-700 mb-4">Follow Us</h4>
    <div class="flex justify-center gap-8">
    <Facebook />
    <Twitter />
    <Linkedin />
    <Instagram />
    </div>
  </div>
</section>

  </>
  )
}

export default Contact