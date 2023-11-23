import { Fragment } from "react";
import { peopleCompleteArray } from "../dataPeaple";

export default function PeaopleComplet() {
  const listPeople = peopleCompleteArray.map((item) => (
    <div className="card mb-3" key={item.id}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={"https://i.imgur.com/" + item.imageId + "s.jpg"}
            className="img-fluid rounded-start"
            alt=""
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.profession}</p>
            <p>{item.accomplishment}</p>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  ));

  return <>{listPeople}</>;
}
