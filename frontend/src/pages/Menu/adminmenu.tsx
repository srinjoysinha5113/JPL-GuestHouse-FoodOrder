import ExcelUploader from '../../components/Menu/ExcelUploader';

function Admin() {
    return (
        <div className="max-w-6xl mx-auto p-6 space-y-8">
            <header className="flex justify-between items-center bg-blue-50 p-6 rounded-xl shadow-sm">
                <div>
                    <h1 className="text-3xl font-bold text-blue-900">Admin Dashboard</h1>
                    <p className="text-blue-700">Welcome back, Admin</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">View Orders</button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">Logout</button>
                </div>
            </header>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Menu Update Section */}
                <section className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-xl font-bold border-b pb-2">Weekly Menu Management</h2>
                    <ExcelUploader 
                        onUpload={(file) => console.log('Uploading:', file.name)} 
                        title="Upload Weekly Menu"
                    />
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Current Active Menu: <strong>Mar 1 - Mar 7</strong></span>
                        <button className="text-blue-600 hover:underline">Download CSV</button>
                    </div>
                </section>

                {/* Configuration Section */}
                <section className="space-y-4 bg-white p-6 rounded-xl shadow-md border border-gray-100">
                    <h2 className="text-xl font-bold border-b pb-2">Order Settings</h2>
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">Today's Closing Time</label>
                            <input type="time" className="p-2 border rounded-md" defaultValue="10:00" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium text-gray-700">Tomorrow's Closing Time</label>
                            <input type="time" className="p-2 border rounded-md" defaultValue="20:00" />
                        </div>
                        <button className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                            Update Times
                        </button>
                    </div>
                </section>
            </div>

            {/* Item Management Section */}
            <section className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-bold border-b pb-2 mb-4">Regular & Special Menu Items</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Item Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {/* Example Row */}
                            <tr>
                                <td className="px-6 py-4 whitespace-nowrap font-medium">Paneer Butter Masala</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Regular</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹180</td>
                                <td className="px-6 py-4 whitespace-nowrap"><span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Available</span></td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                                    <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                                    <button className="text-red-600 hover:text-red-900">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className="mt-4 px-4 py-2 border-2 border-dashed border-blue-400 text-blue-600 w-full rounded-lg hover:bg-blue-50 font-medium">
                    + Add New Item
                </button>
            </section>
        </div>
    );
}

export default Admin;