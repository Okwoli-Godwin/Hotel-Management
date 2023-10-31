

const Dashboardhometable = () => {
    const tableItems = [
        {
            name: "Liam James",
            mobile: "08022174775",
            Checkin: "12-08-2019",
            Checkout: "$100K",
            Room: "Single",
            status: "Paid",
        },
        {
            name: "Olivia Emma",
            mobile: "08162657693",
            Checkin: "12-08-2019",
            Checkout: "$90K",
            Room: "Classic Apartment",
            status: "Unpaid",
        },
        {
            name: "William Benjamin",
            mobile: "07022077561",
            Checkin: "12-08-2019",
            Checkout: "$80K",
            Room: "Single",
            status: "Paid",
        },
        {
            name: "Henry Theodore",
            mobile: "0908765432",
            Checkin: "12-08-2019",
            Checkout: "$120K",
            Room: "Single",
            status: "Unpaid",
        },
        {
            name: "Amelia Elijah",
            mobile: "09123456789",
            Checkin: "12-08-2019",
            Checkout: "$75K",
            Room: "Classic Apartment",
            status: "Paid",
        },
    ]
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 bg-[#fff] rounded-[7px] pt-[28px] pb-[28px] shadow-md">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Latest Booking Details
                    </h3>
                </div>
            </div>
            <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="bg-gray-50 text-[#060606] font-semibold border-b">
                        <tr>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Phone</th>
                            <th className="py-3 px-6">Check In</th>
                            <th className="py-3 px-6">Check Out</th>
                            <th className="py-3 px-6">Room Type</th>
                            <th className="py-3 pr-6">status</th>
                            <th className="py-3 px-6"></th>

                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y bg-[#fff]">
                        {
                            tableItems.map((item, idx) => (
                                <tr key={idx}>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.mobile}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Checkin}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Checkout}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{item.Room}</td>
                                    <td className="pr-6 py-4 whitespace-nowrap">
                                        <span className={`px-3 py-2 rounded-full font-semibold text-xs ${item.status == "Paid" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50"}`}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td className="text-right px-6 whitespace-nowrap">
                                        <a href="javascript:void()" className="py-2 px-3 font-medium text-indigo-600 hover:text-indigo-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Edit
                                        </a>
                                        <button className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
  )
}

export default Dashboardhometable