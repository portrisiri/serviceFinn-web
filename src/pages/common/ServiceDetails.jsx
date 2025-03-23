import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, Tag, Heart, Share, MessageSquare } from 'lucide-react';
// import useAuthStore from '../store/auth-store'; 

function ServiceDetails() {
  // Mock data instead of fetching
  const mockEvent = {
    id: '1',
    eventTitle: 'Sound Of Christmas 2023',
    eventBanner: '/christmas-concert.jpg',
    user: 'Bangkok Symphony Orchestra',
    description: 'Join us for the magical Sound of Christmas 2023! This annual holiday concert features the Bangkok Symphony Orchestra performing classic Christmas carols and festive music.\n\nThe concert will include beloved Christmas songs, orchestral arrangements, and special guest performances.\n\nPerfect for families and music lovers of all ages, this festive celebration will put you in the holiday spirit!',
    eventDate: '2023-12-24T19:00:00',
    endTime: '22:00',
    location: 'Thailand Cultural Centre',
    locationDetails: 'Main Hall, 2nd Floor',
    eventCategories: 'Music, Concert, Holiday',
    status: 'APPROVED',
    tickets: JSON.stringify([
      { id: 1, name: 'General Admission', price: 800 },
      { id: 2, name: 'VIP Seats', price: 1500 },
      { id: 3, name: 'Family Package (4 tickets)', price: 2800 }
    ])
  };

  // Mock comments data
  const mockComments = [
    {
      id: 1,
      user: {
        name: 'Somchai J.',
        avatar: '/avatar1.jpg'
      },
      content: 'I attended last year and it was amazing! The orchestra was fantastic and the venue had a great atmosphere.',
      date: '1 week ago'
    },
    {
      id: 2,
      user: {
        name: 'Nisa P.',
        avatar: '/avatar2.jpg'
      },
      content: 'Does anyone know if this is suitable for kids? My daughter is 7 years old and loves music.',
      date: '4 days ago'
    },
    {
      id: 3,
      user: {
        name: 'Organizer',
        avatar: '/organizer.jpg',
        isOrganizer: true
      },
      content: 'Yes, the event is family-friendly! Children of all ages are welcome. We have special Christmas activities before the concert starts at 18:30.',
      date: '3 days ago'
    }
  ];

  // const { user } = useAuthStore();
  const [event] = useState(mockEvent);
  const [comments] = useState(mockComments);
  const [showModal, setShowModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [commentText, setCommentText] = useState('');

  // แปลง timestamp เป็นวันที่ที่อ่านได้
  const eventDate = new Date(event.eventDate);
  const formattedDate = eventDate.toLocaleDateString('th-TH', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // const handleTicketClick = (ticket) => {
  //   if (!user) {
  //     // Mock behavior - no actual redirect
  //     alert('Please log in to purchase tickets');
  //     return;
  //   }
  //   setSelectedTicket(ticket);
  //   setShowModal(true);
  // };

  const handleProceedToPayment = () => {
    setShowPaymentModal(true);
  };

  const handleConfirmPayment = () => {
    // Mock payment behavior
    setShowPaymentModal(false);
    setShowModal(false);
    alert('Payment successful!');
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    alert('Comment functionality would be implemented here');
    setCommentText('');
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8">
        {/* Event Banner */}
        <div className="relative h-[400px] w-full mb-8">
          <img 
            src={event.eventBanner} 
            alt={event.eventTitle}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Event Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{event.eventTitle}</h1>
            
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <User className="w-5 h-5" />
              <span>จัดโดย: {event.user}</span>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">About This Event</h2>
              <p className="whitespace-pre-line">{event.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Date</h3>
                    <p>{formattedDate}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Time</h3>
                    <p>Start: {eventDate.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })}</p>
                    <p>End: {event.endTime}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="capitalize">{event.location}</p>
                    <p className="text-sm text-gray-600">{event.locationDetails}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Category</h3>
                    <p>{event.eventCategories}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Comments</h2>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" /> 48
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" /> {comments.length}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share className="w-4 h-4" /> Share
                  </span>
                </div>
              </div>
              
              {/* Comment Form */}
              <form onSubmit={handleSubmitComment} className="mb-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <div className="flex-grow">
                    <textarea 
                      className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Add a comment..."
                      rows="3"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    ></textarea>
                    <div className="flex justify-end mt-2">
                      <button type="submit" className="btn btn-primary">Post Comment</button>
                    </div>
                  </div>
                </div>
              </form>
              
              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{comment.user.name}</span>
                        {comment.user.isOrganizer && (
                          <span className="bg-primary text-white text-xs px-2 py-1 rounded">Organizer</span>
                        )}
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="mt-1">{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
              {event.tickets && JSON.parse(event.tickets).length > 0 ? (
                <div className="space-y-4">
                  {JSON.parse(event.tickets).map((ticket, index) => (
                    <div key={index} className="border-b pb-4">
                      <h3 className="font-semibold">{ticket.name}</h3>
                      <p className="text-lg">
                        {ticket.price === "0" || ticket.price === 0 ? 'Free' : `฿${ticket.price}`}
                      </p>
                      <button 
                        className="btn btn-primary w-full mt-2"
                        disabled={event.status !== 'APPROVED'}
                        onClick={() => handleTicketClick(ticket)}
                      >
                        {event.status === 'APPROVED' ? 
                          (ticket.price === "0" || ticket.price === 0 ? 'Register' : 'Buy Ticket') 
                          : 'Event Pending'}
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className='font-semibold text-sky-500'>FREE ENTRY</p>
              )}

              {/* Event location map */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Location</h3>
                <div className="rounded overflow-hidden">
                  <div className="bg-gray-200 h-48 relative">
                    {/* Mock map */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-red-500" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 text-center text-sm">
                      {event.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Event Statistics</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Total Views:</span>
                    <span className="font-semibold">2,487</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span>Interested:</span>
                    <span className="font-semibold">183</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Tickets Sold:</span>
                    <span className="font-semibold">76/150</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Buy Ticket Modal */}
      {showModal && selectedTicket && (
        <div className="modal modal-open">
          <div className="modal-box max-w-[500px]">
            <h3 className="font-bold text-lg mb-4">Buy Ticket</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Event</p>
                <p>{event.eventTitle}</p>
              </div>
              
              <div>
                <p className="font-semibold">Ticket Type</p>
                <p>{selectedTicket.name}</p>
              </div>
              
              <div>
                <p className="font-semibold">Price</p>
                <p>{selectedTicket.price === "0" || selectedTicket.price === 0 ? 
                    'Free' : `฿${selectedTicket.price}`}</p>
              </div>

              <div>
                <p className="font-semibold">Date</p>
                <p>{formattedDate}</p>
              </div>

              <div>
                <label className="font-semibold">Quantity</label>
                <input 
                  type="number" 
                  className="input input-bordered w-full mt-1" 
                  min="1"
                  max="10"
                  defaultValue="1"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>

            <div className="modal-action">
              <button 
                className="btn btn-primary"
                onClick={selectedTicket.price === "0" || selectedTicket.price === 0 ? 
                  handleConfirmPayment : handleProceedToPayment}
              >
                {selectedTicket.price === "0" || selectedTicket.price === 0 ? 
                  'Confirm Registration' : 'Proceed to Payment'}
              </button>
              <button 
                className="btn" 
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="modal modal-open">
          <div className="modal-box max-w-[400px]">
            <h3 className="font-bold text-xl mb-4">Payment QR Code</h3>
            
            <div className="space-y-4">
              <div className="text-center">
                <p className="font-semibold mb-2">Total Amount</p>
                <p className="text-2xl text-primary">฿{selectedTicket.price * quantity}</p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">QR Code Placeholder</span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600">
                <p>Please scan QR code to proceed with payment</p>
                <p>The ticket will be issued after payment confirmation</p>
              </div>
            </div>

            <div className="modal-action">
              <button 
                className="btn btn-primary"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </button>
              <button 
                className="btn" 
                onClick={() => setShowPaymentModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServiceDetails;