import {BiDotsHorizontalRounded} from "react-icons/bi"

export default () => {

    const tableItems = [
        {
            avatar: "https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            id: "AB-123",
            name: "Liam James",
            email: "liamjames@example.com",
            package: "Continental",
            booking: "Active",
            room: "Super Delux",
            arrive: "10 Feb 2020",
            payment: "Paid"
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            id: "AB-123",
            name: "Olivia Emma",
            email: "oliviaemma@example.com",
            package: "Strater",
            booking: "Active",
            room: "Single",
            arrive: "07 Feb 2021",
            payment: "Due"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            id: "AB-123",
            name: "William Benjamin",
            email: "william.benjamin@example.com",
            package: "All Suit",
            booking: "Pending",
            room: "Super Delux",
            arrive: "10 Jan 2021",
            payment: "Due"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            id: "AB-123",
            name: "Henry Theodore",
            email: "henrytheodore@example.com",
            package: "Vacation",
            booking: "Active",
            room: "Double",
            arrive: "07 Feb 2021",
            payment: "Paid"
        },
        {
            avatar: "https://images.unsplash.com/photo-1439911767590-c724b615299d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
            id: "AB-123",
            name: "Amelia Elijah",
            email: "amelia.elijah@example.com",
            package: "Honeymoon",
            booking: "Pending",
            room: "Double",
            arrive: "02 May 2021",
            payment: "Paid"
        },
    ]

  

    return (
        // <div className="max-w-screen-xl mx-auto  md:px-8 bg-[red]">
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto w-[full%] bg-[#fff]">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 px-6">ID</th>
                            <th className="py-3 px-6">Customer</th>
                            <th className="py-3 px-6">Package</th>
                            <th className="py-3 px-6">Booking</th>
                            <th className="py-3 px-6">Room Type</th>
                            <th className="py-3 px-6">Arrive</th>
                            <th className="py-3 px-6">Payment</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                                    <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                                        <img src={item.avatar} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <span className="block text-gray-700 text-sm font-medium">{item.name}</span>
                                            <span className="block text-gray-700 text-xs">{item.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.package}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 font-semibold text-xs ${item.booking == "Active" ? "text-green-600 " : "text-[#F4BD0E]"}`}>
                                            {item.booking}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.room}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.arrive}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 font-semibold text-xs ${item.payment == "Paid" ? "text-green-600 " : "text-[#F4BD0E]"}`}>
                                            {item.payment}
                                        </span>
                                    </td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <button  className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg text-[22px]">
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