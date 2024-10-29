"use client"
import AuthContext from '@/app/context/AuthContext';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import avatar from '/public/avatar.jpg';

const EditProfile = () => {
    const { user } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        phone: '',
        address: '',
        profileImage: null, // For storing the new profile image file
    });
    const [previewImage, setPreviewImage] = useState(avatar); // Default to avatar image
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            setFormData({
                username: user.username || '',
                email: user.email || '',
                phone: user.phone || '',
                address: user.address || '',
                profileImage: user.profileUrl || null,
            });
            setPreviewImage(user.profileUrl || avatar);
            setLoading(false);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData((prevData) => ({
                ...prevData,
                profileImage: file, // Store the selected image file
            }));
            setPreviewImage(URL.createObjectURL(file)); // Set image preview
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();
        formDataToSubmit.append("username", formData.username);
        formDataToSubmit.append("email", formData.email);
        formDataToSubmit.append("phone", formData.phone);
        formDataToSubmit.append("address", formData.address);

        try {
            const response = await fetch("http://localhost:4000/users/edit/${user._id}", {
                method: "POST",
                body: formDataToSubmit,
            });

            if (!response.ok) {
                throw new Error("Failed to update user profile.");
            }

            // Handle successful update (e.g., show a success message or refresh user data)
            alert("Profile updated successfully!");
        } catch (error) {
            console.error("Error updating profile:", error);
            alert("There was an error updating your profile.");
        }
    };

    if (loading) {
        return <div className="text-center mt-8">Loading user data...</div>;
    }

    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-8">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="flex flex-col items-center mb-6">
                <label htmlFor="profileImageInput" className="cursor-pointer">
                    <Image
                        src={previewImage}
                        alt="Profile Picture"
                        width={80}
                        height={80}
                        className="w-40 h-40 rounded-full object-cover border-2 border-gray-300"
                    />
                </label>
                <input
                    type="file"
                    id="profileImageInput"
                    name="profileImage"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-medium mb-1">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default EditProfile;
