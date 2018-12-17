import React from 'react';

const Inventory = ({ equipped }) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Weapon:</th>
            <td>{equipped.weapon}</td>
          </tr>
          <tr>
            <th>Armour:</th>
            <td>{equipped.armour}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;