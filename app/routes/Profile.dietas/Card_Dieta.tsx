import { Link } from "@remix-run/react";
import { useState } from "react";

interface CardsProps {
  title: string;
}

export function CardDieta(props: CardsProps) {

  function changeAnimation(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.currentTarget.className += " fa-shake"    
  }

  function changeToDefault(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
      e.currentTarget.className = e.currentTarget.className.replace(" fa-shake","")    
  }

  return (

    <Link to="" style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="card-top">
          <div className="ImageAdress"><img src="https://images.unsplash.com/photo-1595147389795-37094173bfd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80" alt="Unsplash Photo" /></div>
        </div>
        <div className="card-content">
          <h3 className="title">{props?.title}</h3>
          <h6 className="tag tag-travel">TRAVEL</h6>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className="text-end iconsCard">
            <button type="button" title="Excluir" style={{ border: "none" }}>
              <i className="px-2 fa-solid fa-trash text-danger" 
                onMouseEnter={changeAnimation}
                onMouseLeave={changeToDefault}
              >
              </i>
            </button>
            <button type="button" title="Excluir" style={{ border: "none" }}>
              <i className="px-2 fa-solid fa-ellipsis text-info" title="Atualizar"
                onMouseEnter={changeAnimation}
                onMouseLeave={changeToDefault}
              ></i>
            </button>
          </p>
        </div>
      </div >
    </Link>
  )
}

