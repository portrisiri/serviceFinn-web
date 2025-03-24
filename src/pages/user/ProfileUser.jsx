import React, { useState, useEffect } from "react";
import { useUser, UserProfile } from "@clerk/clerk-react";
import axios from "axios";
import MapCurrentLocation from "../../components/common/MapCurrentLocation";

function ProfileUser() {
  const { user } = useUser();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addressCoordinates, setAddressCoordinates] = useState(null);
  const [manageAddressModalOpen, setManageAddressModalOpen] = useState(false);
  const [newAddress, setNewAddress] = useState(null);
  const [showMapModal, setShowMapModal] = useState(false);
  const [mapAction, setMapAction] = useState(null);

  console.log(userData)

  useEffect(() => {
    if (user && user.id) {
      const fetchUserData = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`http://localhost:4289/user/${user.id}`);
          setUserData(response.data);
          setLoading(false);
          console.log(response.data);

          if (response.data.UserAddress && response.data.UserAddress[0]) {
            setAddressCoordinates({
              latitude: response.data.UserAddress[0].latitude,
              longitude: response.data.UserAddress[0].longitude,
            });
          }
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchUserData();
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openManageAddressModal = () => setManageAddressModalOpen(true);
  const closeManageAddressModal = () => setManageAddressModalOpen(false);

  const handleAddressChange = (addressData) => {
    setNewAddress(addressData);
  };

  const handleUpdateAddress = async () => {
    if (newAddress) {
      try {
        await axios.put(`http://localhost:4289/user/${user.id}`, {
          latitude: newAddress.lat,
          longitude: newAddress.lng,
          address: newAddress.address,
        });
        const response = await axios.get(`http://localhost:4289/user/${user.id}`);
        setUserData(response.data);
        closeMapModal();
      } catch (err) {
        console.error("Error updating address:", err);
      }
    }
  };

  const openMapModal = (action) => {
    setMapAction(action);
    setShowMapModal(true);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
    setMapAction(null);
  };

  return (
    <div className="w-[1000px] mx-auto my-auto flex flex-col justify-center gap-4 mt-5 ">
      {/* PROFILE */}
      <h2 className="font-bold text-2xl"> User Profile </h2>
      <div className="flex w-full flex-col">
        <div className="card bg-base-300 rounded-box flex flex-row gap-5 ml-5 h-[300px] w-auto">
          {/* Left */}
          <div className="ml-10 w-[20%] flex flex-col justify-center">
            {user && user.imageUrl ? (
              <>
                <img
                  src={user.imageUrl}
                  className="w-[150px] h-[150px] rounded-full mt-5"
                  alt="User Profile"
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
            <p className="ml-5">
              {userData ? `${userData.firstName}  ${userData.lastName}` : "Loading..."}
            </p>
            <p className="font-bold mt-5"> Email Address: </p>
            <p className="ml-5"> {userData ? userData.email : "Loading..."} </p>
            <p className="font-bold mt-5"> Phone NO.: </p>
            <p className="ml-5"> {userData ? userData.phoneNumber : "Loading..."} </p>
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
        <h2 className="font-bold text-2xl mb-5 "> Address </h2>
        <div className="card bg-base-300 rounded-box flex flex-row gap-5 ml-5 h-[400px]">
          <div className="w-[40%] h-[400px] bg-sky-500 z-1">
            {addressCoordinates && (
              <MapCurrentLocation
                latitude={addressCoordinates.latitude}
                longitude={addressCoordinates.longitude}
              />
            )}
          </div>

          <div className="w-[60%]">
            <button className="btn btn-outline mt-5" onClick={openManageAddressModal}> Manage Address </button>
            <p className="font-bold mt-5"> Current Address: </p>
            <p className="ml-5 font-bold"> { userData.UserAddress.name } </p>
            <p className="ml-5">
              {userData && userData.UserAddress && userData.UserAddress[0]
                ? userData.UserAddress[0].address
                : "No address found"}
            </p>
          </div>
        </div>

{/*
        //ACTIVITY LOG
        <div className="divider"></div>
        <h2 className="font-bold text-2xl mb-5"> Activity Log </h2>
        <div className="card bg-base-300 rounded-box grid h-20 place-items-center">
          <p> Member Since: {userData ? "Member since placeholder" : "Loading..."} </p>
          <p> Last Login: {userData ? "Last login placeholder" : "Loading..."} </p>
          <p> Status: {userData ? "Status placeholder" : "Loading..."} </p>
        </div>
*/}
      </div>


      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white p-8 rounded-lg">
            <UserProfile />
            <button className="btn btn-outline mt-5" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* Manage Address Modal */}
      {manageAddressModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-300">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="font-bold text-lg mb-4">Manage Address</h2>
            <button className="btn btn-outline mb-2 w-full" onClick={() => openMapModal('update')}>Update Current Address</button>
            <button className="btn btn-outline w-full" onClick={() => openMapModal('add')}>Add New Address</button>
            <button className="btn btn-sm mt-4" onClick={closeManageAddressModal}>Close</button>
          </div>
        </div>
      )}

      {/* Map Modal */}
      {showMapModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-300">
          <div className="bg-white p-8 rounded-lg w-[800px] h-[500px]">
            <MapCurrentLocation onAddressChange={handleAddressChange} />
            <div className="flex justify-end mt-4">
              <button className="btn btn-sm btn-outline mr-2" onClick={closeMapModal}>Cancel</button>
              <button className="btn btn-sm btn-primary" onClick={handleUpdateAddress}>Update</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileUser;