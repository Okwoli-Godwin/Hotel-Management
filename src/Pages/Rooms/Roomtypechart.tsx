import {BiDotsHorizontalRounded} from "react-icons/bi"

export default () => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
            roomno: "101",
            roomtype: "Classic One Bedroom Apartment",
            email: "liamjames@example.com",
            Ac: "Ac",
            meal: "None",
            bed: "1 Bedroom, 1 Living room, Television, Tea Tray, Dining Area, Kitchenette, Refrigerator, Hot Plates, Kitchenware",
            rent: "44.99 USD",
            status: "Active"
        },
        {
            avatar: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "102",
            roomtype: "Classic Room",
            email: "oliviaemma@example.com",
            Ac: "Ac",
            meal: "Breakfast",
            bed: "6' x 7' Bed, Television, Complimentary Tea Tray, Guest Amenities",
            rent: "35.00 USD",
            status: "Active"
        },
        {
            avatar: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "103",
            roomtype: "Deluxe One Bedroom Apartment",
            email: "william.benjamin@example.com",
            Ac: "None",
            meal: "Dinner",
            bed: "1 Bedroom, 1 Living room, Television, Tea Tray, Dining Area, Kitchenette, Refrigerator, Hot Plates, Kitchenware",
            rent: "32.00 USD",
            status: "Inactive"
        },
        {
            avatar: "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "104",
            roomtype: "One Bedroom Terrace Apartment",
            email: "henrytheodore@example.com",
            Ac: "Ac",
            meal: "Two",
            bed: "1 Bedroom, 1 Living room, Television, Tea Tray, Dining Area, Kitchenette, Refrigerator, Hot Plates, Kitchenware",
            rent: "48.99USD",
            status: "Active"
        },
        {
            avatar: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "105",
            roomtype: "One Bedroom Twin Bed Apartment",
            email: "amelia.elijah@example.com",
            Ac: "None",
            meal: "Lunch",
            bed: "1 Bedroom, 1 Living room, Television, Tea Tray, Dining Area, Kitchenette, Refrigerator, Hot Plates, Kitchenware",
            rent: "53.99USD",
            status: "Inactive"
        },
    ]

  

    return (
        // <div className="max-w-screen-xl mx-auto  md:px-8 bg-[red]">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto w-[full%] bg-[#fff]">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Room Type</th>
                            <th className="py-3 px-6">Rent</th>
                            <th className="py-3 px-6">Facilities</th>
                            <th className="py-3 px-6">Status</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="flex items-center gap-x-3 py-3 pl-[15px] pr-[75px] whitespace-nowrap">
                                        <img src={item.avatar} className="w-[80px] h-[60px] rounded-sm" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.roomtype}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.rent}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.bed}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 font-semibold text-xs ${item.status == "Active" ? "text-green-600 " : "text-[red]"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <button  className="py-2 leading-none px-3 font-medium text-gray-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg text-[22px]">
                                            <BiDotsHorizontalRounded />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        // </div>
    )
}