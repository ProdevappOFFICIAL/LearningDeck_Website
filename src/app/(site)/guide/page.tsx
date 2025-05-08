import Image from 'next/image';
import React from 'react';

export default function LearningDeckGuide() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 mt-20">
      {/* Header */}
    

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg border p-5  mb-8">
          <h2 className="text-xl font-bold text-blue-700 mb-6">GUIDE: HOW TO USE THE LEARNINGDECK EXAM MANAGER</h2>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Welcome to the LearningDeck Exam Manager administrator guide. This document will walk you through 
              the process of setting up and managing digital examinations for your institution.
            </p>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                STEP 1: Connect to an External Device
              </h3>
              
              <div className="ml-11">
                <p className="mb-4">
                  Before opening the LearningDeck Exam Manager, ensure your device is connected through one of the following methods:
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-700">WiFi & Hotspot</h4>
                    <p>Connect to a local WiFi network or create a hotspot</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-700">Ethernet</h4>
                    <p>Connect using a physical Ethernet cable</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-blue-700">WiFi Router</h4>
                    <p>Connect via an external WiFi router</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold">IMPORTANT NOTE:</p>
                  <p>If you have already opened the software without connecting, you can establish a connection afterward and click the reload button until your device appears in the dropdown menu.</p>
                </div>
                
              <img src={'/startserverd.png'} className='rounded-lg' />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                STEP 2: Select Host Device 
              </h3>
              
              <div className="ml-11">
                <p className="mb-4">
                  You will see a dialog with a dropdown menu containing the list of devices that can serve as your exam server.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 mb-6">
                  <p className="font-bold">IMPORTANT NOTE:</p>
                  <p>Only users connected to your host device will be able to access the examination.</p>
                </div>
                
                <img src={'/startserverg.png'} className='rounded-lg' />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                STEP 3: Customize Your Examination
              </h3>
              
              <div className="ml-11">
                <p className="mb-4">
                  Navigate through the nested sidebar to customize various aspects of your examination:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700">Student Classes</h4>
                    <p>Create and manage class groups</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700">Subjects</h4>
                    <p>Add and configure examination subjects</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700">Questions</h4>
                    <p>Create question banks and individual questions</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-700">Settings</h4>
                    <p>Configure exam parameters and options</p>
                  </div>
                </div>
                
                <img src={'/homeadmin.png'} className='rounded-lg border' />
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                STEP 4: Set Up Client Application
              </h3>
              
              <div className="ml-11">
                <p className="mb-4">
                  For the client application (requires internet connection):
                </p>
                
                <ol className="list-decimal ml-6 space-y-2 mb-6">
                  <li>Open the cart icon in the primary sidebar</li>
                  <li>Locate and select <span className="font-bold">LearningDeck Web Client</span> from the list of templates</li>
                  <li>Download the template if you haven&apost already</li>
                  <li>When the dialog appears, click the <span className="font-bold">Serve Template</span> button</li>
                  <li>Click <span className="font-bold">Open in Browser</span> to access the template URL</li>
                </ol>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mb-6">
                  <p className="font-bold">SUCCESS:</p>
                  <p>Once the template is loaded, it can be accessed on any device connected to the Host device.</p>
                </div>
                
                <img src={'/templates.png'} className='rounded-lg border' />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-blue-700 mb-4">Need Additional Help?</h2>
          <p className="mb-4">If you encounter any issues during setup or have questions about using LearningDeck Exam Manager, please contact our support team:</p>
          
          <div className="flex items-center space-x-2 text-blue-600">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>support@learningdeck.com</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-blue-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} LearningDeck Cooperation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}