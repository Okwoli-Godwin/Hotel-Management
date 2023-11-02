import {BiDotsHorizontalRounded} from "react-icons/bi"

export default () => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww",
            roomno: "101",
            roomtype: "Single",
            email: "liamjames@example.com",
            Ac: "Ac",
            meal: "None",
            bed: "1",
            rent: "44.99 USD",
            status: "Open"
        },
        {
            avatar: "https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "102",
            roomtype: "Superior One Bedroom",
            email: "oliviaemma@example.com",
            Ac: "Ac",
            meal: "Breakfast",
            bed: "2",
            rent: "35.00 USD",
            status: "Booked"
        },
        {
            avatar: "https://images.unsplash.com/photo-1631049552057-403cdb8f0658?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "103",
            roomtype: "Deluxe One Bedroom",
            email: "william.benjamin@example.com",
            Ac: "None",
            meal: "Dinner",
            bed: "1",
            rent: "32.00 USD",
            status: "Open"
        },
        {
            avatar: "https://images.unsplash.com/photo-1587985064135-0366536eab42?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "104",
            roomtype: "Classic Room",
            email: "henrytheodore@example.com",
            Ac: "Ac",
            meal: "Two",
            bed: "2",
            rent: "48.99USD",
            status: "Open"
        },
        {
            avatar: "https://images.unsplash.com/photo-1631049035182-249067d7618e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D",
            roomno: "105",
            roomtype: "One Bedroom Terrace",
            email: "amelia.elijah@example.com",
            Ac: "None",
            meal: "Lunch",
            bed: "2",
            rent: "53.99USD",
            status: "Booked"
        },
    ]

  

    return (
        // <div className="max-w-screen-xl mx-auto  md:px-8 bg-[red]">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto w-[full%] bg-[#fff]">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">Room No.</th>
                            <th className="py-3 px-6">Room Type</th>
                            <th className="py-3 px-6">AC/Non AC</th>
                            <th className="py-3 px-6">Meal</th>
                            <th className="py-3 px-6">Bed Capacity</th>
                            <th className="py-3 px-6">Rent</th>
                            <th className="py-3 px-6">Payment</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.roomno}</td>
                                    <td className="flex items-center gap-x-3 py-3 pl-[15px] pr-[75px] whitespace-nowrap">
                                        <img src={item.avatar} className="w-[80px] h-[60px] rounded-sm" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.roomtype}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Ac}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.meal}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.bed}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.rent}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 font-semibold text-xs ${item.status == "Booked" ? "text-green-600 " : "text-[#F4BD0E]"}`}>
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