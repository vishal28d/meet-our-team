const generateTeamMember = (index) => ({
    id: index,
    name: `Team Member ${index + 1}`,
    role: 'Role',
    image: `https://i.pravatar.cc/200?u=${index + 1}`,
  });
  
  const teamData = Array.from({ length: 18 }, (_, index) => generateTeamMember(index));
  
  export default teamData;
  