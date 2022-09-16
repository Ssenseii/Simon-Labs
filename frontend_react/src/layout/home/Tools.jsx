import React from 'react'
import images from '../../constants/images';

const Tools = () => {
  return (
    <div className="tools">
      
      <table className="tools__table">
        <tbody>

        <tr>
          <td>
            <img src={images.Logo_react} alt="" />
          </td>
          <td>
            <img src={images.Logo_tailwind} alt="" />
          </td>
          <td>
            <img src={images.Logo_materialUI} alt="" />
          </td>
          <td>
            <img src={images.Logo_sass} alt="" />
          </td>
          <td>
            <img src={images.Logo_framer} alt="" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <img src={images.Logo_ps} alt="" />
          </td>
          <td>
            <img src={images.Logo_figma} alt="" />
          </td>
          <td>
            <img src={images.Logo_pr} alt="" />
          </td>
          <td>
            <img src={images.Logo_il} alt="" />
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td>
            <img src={images.Logo_aseprite} alt="" />
          </td>
          <td>
            <img src={images.Logo_blender} alt="" />
          </td>
          <td>
            <img src={images.Logo_sanity} alt="" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tools