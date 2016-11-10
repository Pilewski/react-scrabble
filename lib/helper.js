import React, { Component } from 'react';

const Helper = ({handleClick, name}) => {
  return (
    <button
      onClick={handleClick}
      >{name}</button>
  )
}

module.exports = Helper
