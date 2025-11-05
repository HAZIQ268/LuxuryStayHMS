import React from 'react';


function Users() {
    const sampleUsers = [
        { id: 1, name: 'Aisha Khan', role: 'manager', email: 'aisha@example.com', status: 'active' },
        { id: 2, name: 'Bilal Ahmed', role: 'receptionist', email: 'bilal@example.com', status: 'active' },
        { id: 3, name: 'Sara Ali', role: 'housekeeping', email: 'sara@example.com', status: 'inactive' },
    ];


    return (
        <div>
            <h3 className="mb-4">Users</h3>
            <div className="card shadow-sm">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sampleUsers.map(function (u) {
                                return (
                                    <tr key={u.id}>
                                        <td>{u.id}</td>
                                        <td>{u.name}</td>
                                        <td className="text-capitalize">{u.role}</td>
                                        <td>{u.email}</td>
                                        <td>{u.status}</td>
                                        <td>
                                            <button className="btn btn-sm btn-outline-primary me-2">Edit</button>
                                            <button className="btn btn-sm btn-outline-danger">Deactivate</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}


export default Users;