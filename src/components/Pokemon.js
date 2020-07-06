import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div
      className="col-lg-3 col-sm-12 col-md-6 border m-1 p-2 "
      style={{
        height: "300px",
        flex: 1,
        backgroundColor: "rgba(252, 251, 222)",
      }}
    >
      <div className="d-flex">
        <div className="w-40">
          <img src={pokemon.image} height="150px" width="150px" />
        </div>
        <div className="w-100">
          <div className="w-100" style={{ textAlign: "center" }}>
            <h5 className="mb-0">
              <u>
                <b>{pokemon.name}</b>
              </u>
            </h5>

            <small>({pokemon.classification})</small>
          </div>
          <div className="pl-2 pt-3">
            <p>
              <span>
                <b>Max Hp </b>
                {pokemon.maxHP}
              </span>
            </p>
            <p>
              <span>
                <b>Max Cp </b>
                {pokemon.maxCP}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap">
        <div className="pt-1 w-50" style={{ textAlign: "center" }}>
          <h6>Attacks:</h6>

          <div className="pt-2">
            <small>
              {pokemon.attacks.special.slice(0, 3).map((attacks) => (
                <p key={attacks.name}>
                  <b>A: {attacks.name}</b> <span>D: {attacks.damage}</span>
                </p>
              ))}
            </small>
          </div>
        </div>
        <div className="pt-1 w-50" style={{ textAlign: "center" }}>
          <h6>Weak Against:</h6>

          <div className="pt-2">
            <small>
              {pokemon.weaknesses.map((weakness) => (
                <span key={weakness} className="pl-1">
                  <b>{weakness}</b>
                </span>
              ))}
            </small>
          </div>
        </div>
      </div>
    </div>
  );
}
