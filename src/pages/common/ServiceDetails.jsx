import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, User, Tag, Heart, Share, MessageSquare, Star } from 'lucide-react';
import { SignInButton, useUser } from '@clerk/clerk-react';
import DateCarousel from '../../components/services-page/DateCarousel';
import axios from 'axios';
import { createAlert2 } from '../../utils/createAlert';

function ServiceDetails({ serviceId }) {
  // States for data
  const [service, setService] = useState(null);
  const [provider, setProvider] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useUser();

  // UI states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [commentText, setCommentText] = useState('');
  const [jobDetails, setJobDetails] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [modalOpen, setModalOpen] = useState(null);

  // Fetch service and provider data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);


        const providerData = {
          "providerId": "P87654BKK",
          "role": "PROVIDER",
          "firstName": "Emily",
          "lastName": "Taylor",
          "email": "emily.taylor@example.com",
          "phoneNumber": "+66 456 789 012",
          "companyName": null,
          "personalVerification": false,
          "qualificationVerification": false,
          "companyVerification": false,
          "skills": null,
          "availability": null,
          "profilePicture": "/nanny4.jpg",
          "providerRating": null,
          "latitude": "13.753",
          "longitude": "100.5025",
          "isActive": null,
          "isCompleted": false
        }

        // Mock service data - in production, you would fetch this from your API
        const mockService = {
          id: '1',
          title: 'Professional Childcare Service',
          banner: '/nanny6.jpg',
          description: 'Professional childcare services for families in need of experienced and loving care. We provide compassionate, reliable, and qualified nannies to help with your childcare needs.',
          date: new Date().toISOString(),
          endTime: '18:00',
          location: 'Bangkok Metropolitan Area',
          locationDetails: 'Service available in all districts',
          categories: 'Child care service',
          status: 'ACTIVE',
          price: '1,500',
          providerId: providerData.providerId,
          latitude: parseFloat(providerData.latitude) || 13.7563,
          longitude: parseFloat(providerData.longitude) || 100.5018
        };

        // Map the API provider data to our component's expected format
        const mappedProvider = {
          providerId: providerData.providerId,
          firstName: providerData.firstName,
          lastName: providerData.lastName,
          email: providerData.email,
          phoneNumber: providerData.phoneNumber,
          companyName: providerData.companyName || `${providerData.firstName}'s Services`,
          personalVerification: providerData.personalVerification || false,
          qualificationVerification: providerData.qualificationVerification || false,
          companyVerification: providerData.companyVerification || false,
          skills: providerData.skills || 'General Services',
          availability: providerData.availability || 'Monday-Saturday, 8:00-18:00',
          profilePicture: providerData.profilePicture || '/provider-avatar.jpg',
          providerRating: providerData.providerRating || 4.5,
          isActive: providerData.isActive || true,
          isCompleted: providerData.isCompleted || false
        };

        // Mock comments data
        const mockComments = [
          {
            id: 1,
            user: {
              name: 'Leane Lee.',
              avatar: '/comment/3.jpg'
            },
            content: '"Our children absolutely adored her! She was always coming up with fun activities and games.',
            date: '2 weeks ago',
            rating: 5
          },
          {
            id: 2,
            user: {
              name: 'Samorn T.',
              avatar: '/comment/4.jpg'
            },
            content: 'She was always on time, and we could always count on her to be there when we needed her.',
            date: '1 month ago',
            rating: 4
          },
          {
            id: 3,
            user: {
              name: 'Richard B.',
              avatar: '/comment/1.jpg',
              isProvider: true
            },
            content: 'Excellent communication! She kept us informed about our children.',
            date: '5 days ago',
            rating: 4
          },
          {
            id: 4,
            user: {
              name: 'Mary J.',
              avatar: '/comment/6.jpg',
              isProvider: true
            },
            content: 'We felt completely comfortable leaving our children in her care. She is incredibly trustworthy.',
            date: '1 days ago',
            rating: 4
          },
          {
            id: 5,
            user: {
              name: 'Phada T.',
              avatar: '/comment/2.jpg',
              isProvider: true
            },
            content: 'She has a very calm and patient demeanor, even when dealing with toddler tantrums.',
            date: '3 months ago',
            rating: 4
          },
          {
            id: 6,
            user: {
              name: 'Sukit K.',
              avatar: '/comment/5.jpg',
              isProvider: true
            },
            content: 'She went above and beyond, helping with light housework and meal preparation.',
            date: '3 weeks ago',
            rating: 5
          },
          {
            id: 7,
            user: {
              name: 'Pravit T.',
              avatar: '/comment/9.jpg',
              isProvider: true
            },
            content: 'Her extensive experience with children of all ages was evident in her confident care.',
            date: '6 days ago',
            rating: 4
          },
          {
            id: 8,
            user: {
              name: 'Jane T.',
              avatar: '/comment/7.jpg',
              isProvider: true
            },
            content: 'Having her as our nanny gave us complete peace of mind, knowing our children were in good hands.',
            date: '2 days ago',
            rating: 4
          },
          {
            id: 9,
            user: {
              name: 'Pong T.',
              avatar: '/comment/10.jpg',
              isProvider: true
            },
            content: 'She quickly adapted to our family routine and was flexible with our changing schedules.',
            date: '4 days ago',
            rating: 4
          },
          {
            id: 10,
            user: {
              name: 'Pang T.',
              avatar: '/comment/8.jpg',
              isProvider: true
            },
            content: 'Excellent work with good discipline',
            date: '1 days ago',
            rating: 5
          },



        ];

        setService(mockService);
        setProvider(mappedProvider);
        setComments(mockComments);
        setLoading(false);
      } catch (err) {
        setError('Failed to load service details: ' + err.message);
        setLoading(false);
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [serviceId]);

  // Modal handling functions
  const openBookingModal = () => {
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    // Reset booking-related states if needed
    setSelectedDate(null);
    setSelectedTime(null);
    setJobDetails('');
  };

  const openPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };
  const handlepayment = async()=>{
    if(!selectedTime) {
      alert('Please select a time slot');
      return;
    }
    if(!user) {
      createAlert2();
      <SignInButton mode="modal" afterSignInUrl="/service-details/P87654BKK">
      <button className="btn-primary">Sign In</button>
    </SignInButton>
      return;
    }
    const resp = await axios.post('http://localhost:4289/payment/create-payment')
    // Redirect user to Stripe checkout
   setModalOpen( window.location.href = resp.data.checkoutUrl)
  }
  const closePaymentModal = () => {
    setIsPaymentModalOpen(false)
  };

  const handleCompleteBooking = () => {
    if (selectedTime) {
      openPaymentModal();
    } else {
      alert('Please select a time slot');
    }
  };

  const handleConfirmPayment = () => {
    // Mock payment behavior - implement actual payment logic
    closePaymentModal();
    alert('Booking confirmed!');
    // Additional booking confirmation logic
  };

  if (loading) return <div className="text-center p-10">Loading service details...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;
  if (!service || !provider) return <div className="text-center p-10">Service not found</div>;

  return (
    <>
      <div className={`
      container mx-auto px-4 py-8 
      ${isBookingModalOpen || isPaymentModalOpen ? 'opacity-30 pointer-events-none' : 'opacity-100'}
    `}>
        {/* Service Banner */}
        <div className="relative h-[400px] w-full mb-8">
          <img
            src={service.banner || "/placeholder-service.jpg"}
            alt={service.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Service Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mb-4">{service.title}</h1>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-gray-600">
                <User className="w-5 h-5" />
                <span>Provider: {provider.companyName || `${provider.firstName} ${provider.lastName}`}</span>
              </div>

              {provider.providerRating && (
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <span className="font-semibold">{provider.providerRating.toFixed(1)}</span>
                </div>
              )}

              <div className="flex gap-2">
                {provider.personalVerification && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Verified</span>
                )}
                {provider.qualificationVerification && (
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Qualified</span>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">About This Service</h2>
              <p className="whitespace-pre-line">{service.description}</p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-semibold mb-4">Service Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Availability</h3>
                    <p>{provider.availability || 'Contact provider for availability'}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="capitalize">{service.location}</p>
                    <p className="text-sm text-gray-600">{service.locationDetails}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Categories</h3>
                    <p>{service.categories}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Skills</h3>
                    <p>{provider.skills || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Reviews and Comments</h2>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4" /> 24
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageSquare className="w-4 h-4" /> {comments.length}
                  </span>
                  <span className="flex items-center gap-1">
                    <Share className="w-4 h-4" /> Share
                  </span>
                </div>
              </div>



              {/* Comments List */}
              <div className="space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden flex items-center justify-center">
                      <img
                        src={comment.user.avatar}
                        alt="comment"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold">{comment.user.name}</span>
                        {comment.user.isProvider && (
                          <span className="bg-primary text-white text-xs px-2 py-1 rounded">Provider</span>
                        )}
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>

                      {comment.rating && (
                        <div className="flex items-center gap-1 mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < comment.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                      )}

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
              <h2 className="text-2xl font-semibold mb-4">Price: {service.price} ฿</h2>

              {/* Booking Button */}
              <button
                className="btn btn-primary w-full mb-4"
                disabled={service.status !== 'ACTIVE'}
                onClick={openBookingModal}
              > 
               {service.status === 'ACTIVE' ? 'Book Now' : 'Service Unavailable'}
              </button>

              {/* Provider contact */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Contact Provider</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
                      {provider.profilePicture && (
                        <img
                          src={provider.profilePicture}
                          alt="Provider"
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div>
                      <p className="font-semibold">{provider.companyName || `${provider.firstName} ${provider.lastName}`}</p>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm ml-1">{provider.providerRating?.toFixed(1) || 'New'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">Phone:</span> {provider.phoneNumber}</p>
                    <p><span className="font-semibold">Email:</span> {provider.email}</p>
                    <button className="btn btn-outline btn-primary w-full mt-2">
                      Contact Provider
                    </button>
                  </div>
                </div>
              </div>

              {/* Service location map */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Service Area</h3>
                <div className="rounded overflow-hidden">
                  <div className="bg-gray-200 h-48 relative">
                    <img
                      src="/mapNearby.png"
                      alt="map"
                      className="w-full h-full object-cover"
                    />
                    {/* Map placeholder - replace with actual map component */}

                    <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-80 p-2 text-center text-sm">



                    </div>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="mt-6">
                <h3 className="font-semibold mb-2">Service Statistics</h3>
                <div className="bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span>Total Views:</span>
                    <span className="font-semibold">1,248</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span>Bookings:</span>
                    <span className="font-semibold">37</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Response Rate:</span>
                    <span className="font-semibold">95%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Booking Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full">
            <h2 className="text-lg font-bold">{provider.companyName || `${provider.firstName}'s Services`}</h2>
            <p className="text-sm text-gray-600">Address: {service.locationDetails || service.location}</p>

            <div className="flex justify-center my-4">
              <img
                src={provider.profilePicture || "/plumberEx2.jpg"}
                alt="Provider"
                className="w-24 h-24 rounded-full object-cover"
              />
            </div>

            <DateCarousel
              setSelectedTime={setSelectedTime}
              setSelectedDate={setSelectedDate}
            />

            <p className="text-sm text-gray-600 font-semibold">Job Detail:</p>
            <textarea
              className="w-full px-3 py-2 border rounded-md text-sm mt-1"
              placeholder="Describe your specific needs..."
              value={jobDetails}
              onChange={(e) => setJobDetails(e.target.value)}
              rows="3"
            ></textarea>

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-blue-950 text-white px-4 py-2 rounded-md text-sm"
                onClick={closeBookingModal}
              >
                Close
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                onClick={handlepayment}
                disabled={!selectedTime}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}

     {/* Payment Modal */}
     {isPaymentModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-md w-full">
            <h3 className="text-lg font-bold mb-4">Payment QR Code</h3>

            <div className="space-y-4">
              <div className="text-center">
                <p className="font-semibold mb-2">Total Amount</p>
                <p className="text-2xl text-primary">{service.price}฿</p>
              </div>

              <div className="flex justify-center">
                <div className="w-64 h-64 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">QR Code Placeholder</span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600">
                <p>Please scan QR code to proceed with payment</p>
                <p>The booking will be confirmed after payment verification</p>
              </div>
            </div>
            

            <div className="flex justify-end gap-2 mt-4">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded-md text-sm"
                onClick={closePaymentModal}
              >
                Cancel
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700"
                onClick={handleConfirmPayment}
              >
                Confirm Payment
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default ServiceDetails;