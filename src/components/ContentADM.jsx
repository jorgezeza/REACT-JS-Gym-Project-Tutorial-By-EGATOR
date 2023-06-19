import { FiEdit2 } from "react-icons/fi"
import { AiOutlineDelete } from "react-icons/ai"
import TitleADM from "./TitleADM"

const ContentADM = ({ title }) => {
  return (
    <div className="container__content-adm" >
      <TitleADM title={title} />

      <div className="content__wrapper">
        <table className="container__table">
          <thead className="table__header">
            <tr>
              <th>Name</th>
              <th>CreateAt</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody className="table__body">
            <tr>
              <td>Program One kkkkkkkkkkkkkkkk</td>
              <td>08/06/2023</td>
              <td>Active</td>
              <td>
                <div className="wrapper__icons" >
                  <div className="icon__table">
                    <FiEdit2 />
                  </div>
                  <div className="icon__table">
                    <AiOutlineDelete />
                  </div>
                </div>
              </td>
            </tr>

            <tr>
              <td>Program TWO</td>
              <td>08/06/2023</td>
              <td>Active</td>
              <td>
                <div className="wrapper__icons" >
                  <div className="icon__table">
                    <FiEdit2 />
                  </div>
                  <div className="icon__table">
                    <AiOutlineDelete />
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ContentADM
