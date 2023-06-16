INSERT INTO Preisgruppe (id, preis_kilometer,preis_tag)
VALUES
    (1, 24.0, 0.48),
    (2, 50.0, 1.0),
    (3, 82.0, 1.64),
    (4, 55.0, 1.10),
    (5, 65.0, 1.30),
    (6, 5.0, 0.22),
    (7, 105.0, 6.54),
    (8, 35.0, 0.70),
    (9, 40.0, 0.80),
    (10, 60.0, 1.20),
    (11, 75.0, 1.50),
    (12, 80.0, 1.0),
    (13, 40.0, 0.80),
    (14, 65.0, 1.30);

INSERT INTO Auto (id, kennzeichen, hersteller, typ, baujahr, ps, ccm, farbe, kraftstoff, sitzplaetze, extras, zubehoer, versicherungs_nr, tuev, asu, verliehen,preisgruppe_fk)
VALUES
    (1, 'KS R666', 'Renault', 'Megane', 2002, 100, 1596, 'weiß', 'Diesel', 5, 'Radio', '-', '3497856', '2005-05-01', '2005-05-01', false, 2),
    (2, 'KS JV417', 'Lancia', 'Thema', 2004, 145, 1999, 'schwarz', 'Normal', 5, 'Radio', 'Hupe', '3584,247', '2007-08-01', '2007-08-01', false, 4),
    (3, 'KS JS811', 'VW', 'Golf', 2003, 55, 1263, 'weiß', 'Normal', 5, 'Radio', 'Schiebedach', '655/060455-Q', '2005-11-01', '2005-11-01', false, 2),
    (4, 'KS TP14', 'Honda', 'CRX', 2006, 124, 1994, 'rot', 'Super', 2, 'Alufelgen', 'defektes Schiebedach', '2,5428414', '2007-06-01', '2007-06-01', false, 4),
    (5, 'KS K2863', 'Ford', 'Focus', 2006, 90, 1590, 'blau', 'Super', 5, 'Alu', 'Zentralverriegelung', '384+90+6467947', '2007-10-01', '2007-10-01', false, 3),
    (6, 'KS T1010', 'VW', 'Polo', 2001, 45, 1035, 'tornadorot', 'Normal', 5, 'Radio', '-', '9874684947', '2005-06-01', '2005-06-01', false, 1),
    (7, 'KS KV23', 'Ford', 'Focus', 2006, 54, 1597, 'matschschwarz', 'Diesel', 5, 'Radio', 'ZV', '654684354', '2007-09-01', '2007-09-01', false, 2),
    (8, 'KS MB220', 'Mercedes Benz', '220 S', 2006, 123, 2156, 'silbergrau', 'Super', 5, 'Radio', 'Navi', '65846454', '2007-04-01', '2007-04-01', false, 5),
    (9, 'KS CE221', 'VW', 'Golf', 2007, 75, 1596, 'rot', 'Normal', 5, 'Radio', '-', '55514-B1124', '2004-05-01', '2004-05-01', false, 4);



