PGDMP                     	    y            cebi    13.4    13.4 3    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    16394    cebi    DATABASE     c   CREATE DATABASE cebi WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Spanish_Colombia.1252';
    DROP DATABASE cebi;
                postgres    false            ?            1259    16444    construcciones    TABLE     ?   CREATE TABLE public.construcciones (
    idconstruccion integer NOT NULL,
    idpredio integer NOT NULL,
    numpisos integer,
    areatotal integer,
    direccion character varying,
    tipoconstruccion character varying
);
 "   DROP TABLE public.construcciones;
       public         heap    postgres    false            ?            1259    16442 "   Construcciones_ID_construccion_seq    SEQUENCE     ?   CREATE SEQUENCE public."Construcciones_ID_construccion_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ;   DROP SEQUENCE public."Construcciones_ID_construccion_seq";
       public          postgres    false    205            ?           0    0 "   Construcciones_ID_construccion_seq    SEQUENCE OWNED BY     j   ALTER SEQUENCE public."Construcciones_ID_construccion_seq" OWNED BY public.construcciones.idconstruccion;
          public          postgres    false    204            ?            1259    16492    juridico    TABLE     ?   CREATE TABLE public.juridico (
    idjuridico integer NOT NULL,
    idpropietario integer NOT NULL,
    nit numeric,
    razonsocial character varying
);
    DROP TABLE public.juridico;
       public         heap    postgres    false            ?            1259    16490    Juridico_ID_juridico_seq    SEQUENCE     ?   CREATE SEQUENCE public."Juridico_ID_juridico_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."Juridico_ID_juridico_seq";
       public          postgres    false    211            ?           0    0    Juridico_ID_juridico_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public."Juridico_ID_juridico_seq" OWNED BY public.juridico.idjuridico;
          public          postgres    false    210            ?            1259    16476 	   naturales    TABLE     ?   CREATE TABLE public.naturales (
    idnatural integer NOT NULL,
    idpropietario integer NOT NULL,
    tipodocumento character varying,
    numdocumento integer,
    nombre character varying,
    apellidos character varying
);
    DROP TABLE public.naturales;
       public         heap    postgres    false            ?            1259    16474    Naturales_ID_natural_seq    SEQUENCE     ?   CREATE SEQUENCE public."Naturales_ID_natural_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public."Naturales_ID_natural_seq";
       public          postgres    false    209            ?           0    0    Naturales_ID_natural_seq    SEQUENCE OWNED BY     V   ALTER SEQUENCE public."Naturales_ID_natural_seq" OWNED BY public.naturales.idnatural;
          public          postgres    false    208            ?            1259    16417    predios    TABLE     ?   CREATE TABLE public.predios (
    idpredio integer NOT NULL,
    numpredial bigint NOT NULL,
    avaluo bigint,
    nombre character varying NOT NULL,
    departamento character varying NOT NULL,
    municipio character varying NOT NULL
);
    DROP TABLE public.predios;
       public         heap    postgres    false            ?            1259    16415    Predios_ID_predio_seq    SEQUENCE     ?   CREATE SEQUENCE public."Predios_ID_predio_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public."Predios_ID_predio_seq";
       public          postgres    false    201            ?           0    0    Predios_ID_predio_seq    SEQUENCE OWNED BY     P   ALTER SEQUENCE public."Predios_ID_predio_seq" OWNED BY public.predios.idpredio;
          public          postgres    false    200            ?            1259    16460    propietarios    TABLE     ?   CREATE TABLE public.propietarios (
    idpropietario integer NOT NULL,
    idpredio integer NOT NULL,
    direccion character varying NOT NULL,
    email character varying,
    telefono character varying
);
     DROP TABLE public.propietarios;
       public         heap    postgres    false            ?            1259    16458    Propietarios_ID_propietario_seq    SEQUENCE     ?   CREATE SEQUENCE public."Propietarios_ID_propietario_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public."Propietarios_ID_propietario_seq";
       public          postgres    false    207            ?           0    0    Propietarios_ID_propietario_seq    SEQUENCE OWNED BY     d   ALTER SEQUENCE public."Propietarios_ID_propietario_seq" OWNED BY public.propietarios.idpropietario;
          public          postgres    false    206            ?            1259    16428    terrenos    TABLE       CREATE TABLE public.terrenos (
    idterreno integer NOT NULL,
    idpredio integer NOT NULL,
    area integer NOT NULL,
    valorcomercial integer NOT NULL,
    fuentesagua boolean NOT NULL,
    construcciones boolean NOT NULL,
    tipoterreno character varying NOT NULL
);
    DROP TABLE public.terrenos;
       public         heap    postgres    false            ?            1259    16426    Terrenos_ID_terreno_seq    SEQUENCE     ?   CREATE SEQUENCE public."Terrenos_ID_terreno_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public."Terrenos_ID_terreno_seq";
       public          postgres    false    203            ?           0    0    Terrenos_ID_terreno_seq    SEQUENCE OWNED BY     T   ALTER SEQUENCE public."Terrenos_ID_terreno_seq" OWNED BY public.terrenos.idterreno;
          public          postgres    false    202            H           2604    16447    construcciones idconstruccion    DEFAULT     ?   ALTER TABLE ONLY public.construcciones ALTER COLUMN idconstruccion SET DEFAULT nextval('public."Construcciones_ID_construccion_seq"'::regclass);
 L   ALTER TABLE public.construcciones ALTER COLUMN idconstruccion DROP DEFAULT;
       public          postgres    false    205    204    205            K           2604    16495    juridico idjuridico    DEFAULT     }   ALTER TABLE ONLY public.juridico ALTER COLUMN idjuridico SET DEFAULT nextval('public."Juridico_ID_juridico_seq"'::regclass);
 B   ALTER TABLE public.juridico ALTER COLUMN idjuridico DROP DEFAULT;
       public          postgres    false    211    210    211            J           2604    16479    naturales idnatural    DEFAULT     }   ALTER TABLE ONLY public.naturales ALTER COLUMN idnatural SET DEFAULT nextval('public."Naturales_ID_natural_seq"'::regclass);
 B   ALTER TABLE public.naturales ALTER COLUMN idnatural DROP DEFAULT;
       public          postgres    false    209    208    209            F           2604    16420    predios idpredio    DEFAULT     w   ALTER TABLE ONLY public.predios ALTER COLUMN idpredio SET DEFAULT nextval('public."Predios_ID_predio_seq"'::regclass);
 ?   ALTER TABLE public.predios ALTER COLUMN idpredio DROP DEFAULT;
       public          postgres    false    201    200    201            I           2604    16463    propietarios idpropietario    DEFAULT     ?   ALTER TABLE ONLY public.propietarios ALTER COLUMN idpropietario SET DEFAULT nextval('public."Propietarios_ID_propietario_seq"'::regclass);
 I   ALTER TABLE public.propietarios ALTER COLUMN idpropietario DROP DEFAULT;
       public          postgres    false    207    206    207            G           2604    16431    terrenos idterreno    DEFAULT     {   ALTER TABLE ONLY public.terrenos ALTER COLUMN idterreno SET DEFAULT nextval('public."Terrenos_ID_terreno_seq"'::regclass);
 A   ALTER TABLE public.terrenos ALTER COLUMN idterreno DROP DEFAULT;
       public          postgres    false    202    203    203            ?          0    16444    construcciones 
   TABLE DATA           t   COPY public.construcciones (idconstruccion, idpredio, numpisos, areatotal, direccion, tipoconstruccion) FROM stdin;
    public          postgres    false    205   x=       ?          0    16492    juridico 
   TABLE DATA           O   COPY public.juridico (idjuridico, idpropietario, nit, razonsocial) FROM stdin;
    public          postgres    false    211   >       ?          0    16476 	   naturales 
   TABLE DATA           m   COPY public.naturales (idnatural, idpropietario, tipodocumento, numdocumento, nombre, apellidos) FROM stdin;
    public          postgres    false    209   b>       ?          0    16417    predios 
   TABLE DATA           `   COPY public.predios (idpredio, numpredial, avaluo, nombre, departamento, municipio) FROM stdin;
    public          postgres    false    201   ?>       ?          0    16460    propietarios 
   TABLE DATA           [   COPY public.propietarios (idpropietario, idpredio, direccion, email, telefono) FROM stdin;
    public          postgres    false    207   ??       ?          0    16428    terrenos 
   TABLE DATA           w   COPY public.terrenos (idterreno, idpredio, area, valorcomercial, fuentesagua, construcciones, tipoterreno) FROM stdin;
    public          postgres    false    203   ?@       ?           0    0 "   Construcciones_ID_construccion_seq    SEQUENCE SET     R   SELECT pg_catalog.setval('public."Construcciones_ID_construccion_seq"', 6, true);
          public          postgres    false    204            ?           0    0    Juridico_ID_juridico_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Juridico_ID_juridico_seq"', 4, true);
          public          postgres    false    210            ?           0    0    Naturales_ID_natural_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."Naturales_ID_natural_seq"', 2, true);
          public          postgres    false    208            ?           0    0    Predios_ID_predio_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."Predios_ID_predio_seq"', 18, true);
          public          postgres    false    200            ?           0    0    Propietarios_ID_propietario_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."Propietarios_ID_propietario_seq"', 7, true);
          public          postgres    false    206            ?           0    0    Terrenos_ID_terreno_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."Terrenos_ID_terreno_seq"', 3, true);
          public          postgres    false    202            Q           2606    16452    construcciones pk_construccion 
   CONSTRAINT     h   ALTER TABLE ONLY public.construcciones
    ADD CONSTRAINT pk_construccion PRIMARY KEY (idconstruccion);
 H   ALTER TABLE ONLY public.construcciones DROP CONSTRAINT pk_construccion;
       public            postgres    false    205            M           2606    16425    predios pk_id_predio 
   CONSTRAINT     X   ALTER TABLE ONLY public.predios
    ADD CONSTRAINT pk_id_predio PRIMARY KEY (idpredio);
 >   ALTER TABLE ONLY public.predios DROP CONSTRAINT pk_id_predio;
       public            postgres    false    201            O           2606    16436    terrenos pk_id_terreno 
   CONSTRAINT     [   ALTER TABLE ONLY public.terrenos
    ADD CONSTRAINT pk_id_terreno PRIMARY KEY (idterreno);
 @   ALTER TABLE ONLY public.terrenos DROP CONSTRAINT pk_id_terreno;
       public            postgres    false    203            W           2606    16500    juridico pk_juridico 
   CONSTRAINT     Z   ALTER TABLE ONLY public.juridico
    ADD CONSTRAINT pk_juridico PRIMARY KEY (idjuridico);
 >   ALTER TABLE ONLY public.juridico DROP CONSTRAINT pk_juridico;
       public            postgres    false    211            U           2606    16484    naturales pk_natural 
   CONSTRAINT     Y   ALTER TABLE ONLY public.naturales
    ADD CONSTRAINT pk_natural PRIMARY KEY (idnatural);
 >   ALTER TABLE ONLY public.naturales DROP CONSTRAINT pk_natural;
       public            postgres    false    209            S           2606    16468    propietarios pk_propietario 
   CONSTRAINT     d   ALTER TABLE ONLY public.propietarios
    ADD CONSTRAINT pk_propietario PRIMARY KEY (idpropietario);
 E   ALTER TABLE ONLY public.propietarios DROP CONSTRAINT pk_propietario;
       public            postgres    false    207            Y           2606    16453 %   construcciones fk_predio_construccion    FK CONSTRAINT     ?   ALTER TABLE ONLY public.construcciones
    ADD CONSTRAINT fk_predio_construccion FOREIGN KEY (idpredio) REFERENCES public.predios(idpredio);
 O   ALTER TABLE ONLY public.construcciones DROP CONSTRAINT fk_predio_construccion;
       public          postgres    false    2893    205    201            Z           2606    16469 "   propietarios fk_predio_propietario    FK CONSTRAINT     ?   ALTER TABLE ONLY public.propietarios
    ADD CONSTRAINT fk_predio_propietario FOREIGN KEY (idpredio) REFERENCES public.predios(idpredio);
 L   ALTER TABLE ONLY public.propietarios DROP CONSTRAINT fk_predio_propietario;
       public          postgres    false    2893    201    207            X           2606    16437    terrenos fk_predio_terreno    FK CONSTRAINT     ?   ALTER TABLE ONLY public.terrenos
    ADD CONSTRAINT fk_predio_terreno FOREIGN KEY (idpredio) REFERENCES public.predios(idpredio);
 D   ALTER TABLE ONLY public.terrenos DROP CONSTRAINT fk_predio_terreno;
       public          postgres    false    2893    201    203            \           2606    16501     juridico fk_propietario_juridico    FK CONSTRAINT     ?   ALTER TABLE ONLY public.juridico
    ADD CONSTRAINT fk_propietario_juridico FOREIGN KEY (idjuridico) REFERENCES public.propietarios(idpropietario);
 J   ALTER TABLE ONLY public.juridico DROP CONSTRAINT fk_propietario_juridico;
       public          postgres    false    211    2899    207            [           2606    16485     naturales fk_propietario_natural    FK CONSTRAINT     ?   ALTER TABLE ONLY public.naturales
    ADD CONSTRAINT fk_propietario_natural FOREIGN KEY (idpropietario) REFERENCES public.propietarios(idpropietario);
 J   ALTER TABLE ONLY public.naturales DROP CONSTRAINT fk_propietario_natural;
       public          postgres    false    209    207    2899            ?   |   x?u?1? ??ޯxн?O????th?,?8ւ&??1C?C????3Иoߐ?@+??R-??r??$??r??X<???%?g????p?
?t?;?ue???J??nl???9?e?k?C~n?g"? D*?      ?   N   x?3?4???".cNcNsCcKS3#SN???⒢??????b?`O?`?`.NNS#c3KSS3N?D? ?(?D? ?PY      ?   F   x?3?4?tNM)?I?440234107???????t?O?2?4GH?????[?rz?&?q??ޘ_????? b??      ?   4  x????N1???S??~??#ƀ޼?PI??????J<????e??do?????AkZ?P1???JM??m xș?8#wd??L????????N┞}?O??????:0V?_;?TN]J??k?Rp	?c???4b?>?%sʴ?DŲZv?T^N5??9?L???z+????y??cqc??)?Zx?u?}???S??/?Z???z??t??/cqϯ?
?P??????v	?????a=??ae^F?k~???}?
egӑP???Z>?fj?;^?3?~?E?7?K3?w9?&ᒽ??f|?@?o???p      ?   ?   x?m?1n?0Eg??@??egst?????(??@?;?􍃤???????*[O?:U? ٶ{??Yk?r?c??β?:@آC
??Þk?j??;? |????i????Sp?x2??Ob????m????E?O:??<.?[\ͽk?ٷ???????g.??????A? ??EIV42?q??ێ:???~??<???'??c~?&][      ?   I   x?3?4?4500?442? ??4΢Ң?.#N#NC????L:? ?()1/?˘Ә??(f	?Z????? lDZ     