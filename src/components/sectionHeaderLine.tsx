import React from 'react';
import peach from '../assets/images/peachsoda.gif';
import lemon from '../assets/images/lemonsoda.gif';
import meloncream from '../assets/images/meloncreamsoda.gif';

export default function SectionHeaderLine(): JSX.Element {
  return (
    <>
      <img src={peach} style={{ width: 50, height: 50 }} alt="桃色のソーダ" />
      <img src={lemon} style={{ width: 50, height: 50 }} alt="レモン色のソーダ" />
      <img src={meloncream} style={{ width: 50, height: 50 }} alt="メロンクリームソーダ" />
    </>
  );
}
