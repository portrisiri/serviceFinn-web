import React, { useState, useEffect } from "react";
import { useUser, UserProfile } from "@clerk/clerk-react";
import axios from "axios";
import MapCurrentLocation from "../../components/common/MapCurrentLocation";

function ProfileProvider() {
    const { user } = useUser();
    const [providerData, setProviderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addressCoordinates, setAddressCoordinates] = useState(null);
    const [serviceAreaModalOpen, setServiceAreaModalOpen] = useState(false);
    const [newServiceArea, setNewServiceArea] = useState(null);
  
    useEffect(() => {
      const fetchProviderData = async () => {
        if (user && user.id) {
          setLoading(true);
          try {
            const response = await axios.get(`http://localhost:4289/provider/${user.id}`);
            setProviderData(response.data.provider);
            setLoading(false);
  
            if (response.data.provider && response.data.provider.latitude && response.data.provider.longitude) {
              setAddressCoordinates({
                latitude: response.data.provider.latitude,
                longitude: response.data.provider.longitude,
              });
            }
          } catch (err) {
            setError(err);
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      };
  
      fetchProviderData();
    }, [user]);
  
    if (loading) {
      return <div className="text-center p-4">Loading...</div>;
    }
  
    if (error) {
      return <div className="text-center p-4 text-red-500">Error: {error.message}</div>;
    }
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
  
    const openServiceAreaModal = () => setServiceAreaModalOpen(true);
    const closeServiceAreaModal = () => setServiceAreaModalOpen(false);
  
    const handleServiceAreaChange = (addressData) => {
      setNewServiceArea(addressData);
    };
  
    const handleUpdateServiceArea = async () => {
      if (newServiceArea) {
        try {
          await axios.put(`http://localhost:4289/provider/update/${user.id}`, {
            latitude: newServiceArea.lat,
            longitude: newServiceArea.lng,
          });
          // Refresh provider data after update
          const response = await axios.get(`http://localhost:4289/provider/${user.id}`);
          setProviderData(response.data.provider);
          closeServiceAreaModal();
        } catch (err) {
          console.error("Error updating service area:", err);
        }
      }
    };

  return (
    <div className="w-[1000px] mx-auto my-auto flex flex-col justify-center gap-4 mt-5 ">
      {/* PROFILE */}
      <h2 className="font-bold text-2xl">Provider Profile</h2>
      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box flex flex-row gap-5 ml-5 h-[300px] w-auto">
          {/* Left */}
          <div className="ml-10 w-[20%] flex flex-col justify-center">
              {user && user.imageUrl ? (
                <>
                  <img
                    src={user.imageUrl}
                    className="w-[150px] h-[150px] rounded-full mt-5"
                    alt="Provider Profile"
                  />
                  <button className="btn btn-outline btn-info items-center mt-8">
                    Update Picture
                  </button>
                </>
              ) : (
                <div className="text-gray-500">Loading image...</div>
              )}
            </div>

          {/* Info */}
          <div className="ml-10 w-[70%] ">
            <p className="font-bold mt-5"> Name: </p>
                <p className="ml-5">{providerData ? `${providerData.firstName} ${providerData.lastName}` : "Loading..."} </p>
            <p className="font-bold mt-5"> Email Address: </p>
                <p className="ml-5">{providerData ? providerData.email : "Loading..."}</p>
            <p className="font-bold mt-5"> Phone NO.: </p>
                <p className="ml-5">{providerData ? providerData.phoneNumber : "Loading..."}</p>
            </div>

            {/* Right */}
            <div className="ml-10 w-[10%]">
              <button className="btn btn-outline mt-5" onClick={openModal}>
                Edit
              </button>
            </div>
          </div>

        <div className="divider"></div>

        {/* ADDRESS */}
        <h2 className="font-bold text-2xl mb-5 "> Service Area </h2>
        <div className="card bg-base-300 rounded-box flex flex-row gap-5 ml-5 h-[400px]">
          <div className="w-[40%] h-[400px] bg-sky-500">
            {addressCoordinates && (
              <MapCurrentLocation
                latitude={addressCoordinates.latitude}
                longitude={addressCoordinates.longitude}
              />
            )}
          </div>

          <div className="w-[60%]">
            <button className="btn btn-outline mt-5 " onClick={openServiceAreaModal}> Update Service Area </button>
            <p className="font-bold mt-5"> Current service area: </p>
            <p className="ml-5">
              {providerData?.address || "No address found"}
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg">
            <UserProfile />
            <button className="btn btn-sm mt-4" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Service Area Modal */}
      {serviceAreaModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-[700px] h-[500px]">
            <MapCurrentLocation onAddressChange={handleServiceAreaChange} />
            <p> </p>
            <div className="flex justify-end mt-4">
              <button className="btn btn-sm btn-outline mr-2" onClick={closeServiceAreaModal}>
                Cancel
              </button>
              <button className="btn btn-sm btn-primary" onClick={handleUpdateServiceArea}>
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileProvider;