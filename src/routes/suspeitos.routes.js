import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Deolane",
    profissao: "Influencer",
    envolvimento: true,
    nivSuspeito: "medio", 
  },
];

// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
    return res.status(200).json(suspeitos);
  });

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
    const { nome, profissao, envolvimento, nivSuspeito } = req.body;
  
    // Validação dos campos nome e partido
    if (!nome || !profissao) {
      return res.status(400).send({
        message: "O nome ou a profissão não foi preenchido",
      });
    }
  
    // Validação do suspeiot
    if (nivSuspeito != "baixo" && nivSuspeito != "medio" && nivSuspeito != "alto") {
      return res.status(400).send({
        message: "Suspeito não possui nível",
      });
    }
    // Validação de nome
 if (!nome) {
    return res.status(400).send({
      message: "O suspeito não possui nome",
    });
  }

  
  // Adiciona o novo suspeito ao array de suspeitos
  suspeitos.push(suspeitosRoutes);

  return res.status(201).json({
    message: "Suspeito cadastrado",
    suspeitosRoutes,
  });
    
});

// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspeito) => suspeito.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    return res.status(200).json(suspeito);
  });

  // Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, profissao, envolvimento, nivSuspeito } = req.body;
  
    // Busca um suspeito pelo id no array de suspeitos
    const suspeito = suspeitos.find((suspeito) => suspeito.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeiot com id ${id} não encontrado!` });
    }
  
    // Validação dos campos nome e suspeito
    if (!nome || !suspeito) {
      return res.status(400).send({
        message: "O nome ou o suspeito não foi preenchido",
      });
    }
  
    candidato.nome = nome;
    candidato.profissao = profissao;
    candidato.envolvimento = envolvimento;
    candidato.nivSuspeito = nivSuspeito;
   
    return res.status(200).json({
      message: "Suspeito atualizado",
      suspeito,
    });
  });

  suspeitosRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;
  
    // Busca um suspeito pelo id no array de suspeitos
    const candidato = candidatos.find((politico) => politico.id == id);
  
    // Verifica se o suspeito foi encontrado
    if (!suspeito) {
      return res
        .status(404)
        .json({ message: `Suspeito com id ${id} não encontrado!` });
    }
  
    // Remove o suspeito do array de suspeitos
    suspeitos = suspeitos.filter((suspeito) => suspeito.id != id);
  
    return res.status(200).json({
      message: "Suspeito removido",
      suspeito,
    });
  });
  
  export default suspeitosRoutes;